import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import Addresses from './Addresses';
import Questions from './Questions';

const INITIAL_VALUES = {
  title: '',
  description: '',
  addresses: [{ address: '', weight: 0 }],
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

  return (
    <FormikProvider value={formik}>
      <Form>
        <VStack as="fieldset" spacing={4} align="flex-start">
          <Text as="legend">Form</Text>
          <FormControl>
            <FormLabel htmlFor="weighted">Weighted vote</FormLabel>
            <Field as={Checkbox} id="weighted" name="weightedVote.active" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Field as={Input} id="title" name="title" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Field as={Input} id="description" name="description" />
          </FormControl>
          <Addresses />
          <Questions />
          <Button type="submit">Create process</Button>
        </VStack>
      </Form>
    </FormikProvider>
  );
};

export default CreateProcess;
