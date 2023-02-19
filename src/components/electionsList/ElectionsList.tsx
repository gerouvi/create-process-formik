import { Box, Flex } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useSigner } from 'wagmi';
import { getClient } from '../../lib/api/sdkApi';
import ElectionListRow from './ElectionListRow';
import ElectionsListFilters from './ElectionsListFilters';

const INITIAL_VALUES = {
  search: '',
};
const IDS = [
  'c5d2460186f72e5b02237f4489d53a7fe4ae2134fabef8323507020000000003',
  'c5d2460186f72e5b02237f4489d53a7fe4ae2134fabef8323507020000000004',
  'c5d2460186f72e5b02237f4489d53a7fe4ae2134fabef8323507020400000005',
];
const ElectionsList = () => {
  const formikValues = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => console.log(values),
  });

  const { data: signer } = useSigner();

  const [electionsList, setElectionsList] = useState<any[]>([]);

  useEffect(() => {
    const client = getClient(signer);
    Promise.allSettled([
      client.fetchElection(IDS[0]),
      client.fetchElection(IDS[1]),
      client.fetchElection(IDS[2]),
    ])
      .then((res) =>
        res.filter((el) => el.status === 'fulfilled').map((el: any) => el.value)
      )
      .then((res) => setElectionsList(res));
  }, [signer]);

  const electionsListFiltered = filterElections(
    electionsList,
    formikValues.values
  );

  return (
    <Box m="16px auto" p={4} width={{ base: '90%', lg: '650px' }}>
      <ElectionsListFilters formikValues={formikValues} />
      <Flex direction="column" gap={4} mt={8}>
        {electionsListFiltered.map((el: any) => (
          <ElectionListRow key={el.id} el={el} />
        ))}
      </Flex>
    </Box>
  );
};

const filterElections = (elections: any, filters: any) => {
  if (!filters.search) return [...elections];

  const lowerCaseSearch = filters.search.toLowerCase();

  return elections.filter((el: any) =>
    el.title.default.toLowerCase().includes(lowerCaseSearch)
  );
};

export default ElectionsList;
