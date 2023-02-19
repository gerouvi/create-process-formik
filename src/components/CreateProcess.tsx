import { Button, Text } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useAccount, useSigner } from 'wagmi';
import {
  getClient,
  getPlainCensus,
  getWeightedCensus,
  handlerCreateElection,
  updateBalance,
} from '../lib/api/sdkApi';
import CreateProcessAddresses from './CreateProcessAddresses';
import CreateProcessHeader from './CreateProcessHeader';
import CreateProcessOptions from './CreateProcessOptions';
import CreateProcessQuestions from './CreateProcessQuestions';
import FormWrapper from './FormWrapper';

const getInitialValues = (address: any) => ({
  title: '',
  description: '',

  weightedVote: {
    active: false,
    total: 0,
  },

  encrypted: false,
  autostart: false,
  interruptible: false,

  maxVoteOverwrites: {
    active: false,
    times: 0,
  },

  addresses: [
    { address: address, weight: 0 },
    { address: '', weight: 0 },
  ],

  questions: [
    {
      title: '',
      description: '',
      options: ['', ''],
    },
  ],
});

const CreateProcess = () => {
  const { address } = useAccount();
  const { data: signer } = useSigner();

  const formikValues = useFormik({
    initialValues: getInitialValues(address),
    onSubmit: (values) => {
      handleSubmitForm(values, signer);
    },
  });

  const { t } = useTranslation();

  return (
    <>
      <FormWrapper formikValues={formikValues}>
        <>
          <Text as="h3" textTransform="uppercase" fontWeight="bold">
            {t('form', { ns: 'form' })}
          </Text>
          <CreateProcessHeader />
          <CreateProcessOptions />
          <CreateProcessAddresses />
          <CreateProcessQuestions />
          <Button type="submit" alignSelf="stretch">
            {t('form:createProcess')}
          </Button>
        </>
      </FormWrapper>
    </>
  );
};

const handleSubmitForm = async (values: any, signer: any) => {
  const client = getClient(signer);
  let census;

  try {
    updateBalance(client);
    if (values.weightedVote.active) {
      census = await getWeightedCensus(values.addresses);
    } else {
      census = await getPlainCensus(
        values.addresses.map((address: any) => address.address)
      );
    }

    const id = await handlerCreateElection(values, census, client);
    // const info = await client.fetchElection(id);
    // console.log(info);
    // console.log(info.status);
    console.log(id);
    return id;
  } catch (err: any) {
    console.trace(err);
  }
};

export default CreateProcess;
