import {
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import Addresses from './Addresses';

const CreateProcess = () => {
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        addresses: [{ address: '', weight: 0 }],
        weightedVote: {
          active: false,
          total: 0,
        },
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ values }) => {
        console.log(values);
        return (
          <form>
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
            </VStack>
          </form>
        );
      }}
    </Formik>
  );
};

export default CreateProcess;
