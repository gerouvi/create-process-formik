import { Button, VStack } from '@chakra-ui/react';
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
        <VStack as="fieldset" spacing={4} align="flex-start">
          <Header />
          <Addresses />
          <Questions />
          <Button type="submit">{t('form:createProcess')}</Button>
        </VStack>
      </Form>
    </FormikProvider>
  );
};

export default CreateProcess;
