import {
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { Field } from 'formik';

const Header = () => (
  <>
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
  </>
);

export default Header;
