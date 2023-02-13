import { Button, Flex, Text } from '@chakra-ui/react';
import { Form, FormikProvider, useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import Addresses from './Addresses';
import Header from './Header';
import Questions from './Questions';

const INITIAL_VALUES = {
  title: '',
  description: '',
  addresses: [
    { address: '', weight: 0 },
    { address: '', weight: 0 },
  ],
  weightedVote: {
    active: false,
    total: 0,
  },
  questions: [
    {
      title: '',
      description: '',
      options: ['', ''],
    },
  ],
};

const CreateProcess = () => {
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => console.log(values),
  });

  const { t } = useTranslation();

  return (
    <FormikProvider value={formik}>
      <Form>
        <Flex
          as="fieldset"
          direction="column"
          gap={4}
          m="16px auto"
          p={4}
          borderRadius={12}
          width={{ base: '90%', lg: '650px' }}
          boxShadow="2px 2px 10px 2px black"
        >
          <Text as="h3" textTransform="uppercase" fontWeight="bold">
            {t('form', { ns: 'form' })}
          </Text>
          <Header />
          <Addresses />
          <Questions />
          <Button type="submit" alignSelf="stretch">
            {t('form:createProcess')}
          </Button>
        </Flex>
      </Form>
    </FormikProvider>
  );
};

export default CreateProcess;
