import { SearchIcon } from '@chakra-ui/icons';
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Field } from 'formik';
import FormWrapper from '../FormWrapper';

interface props {
  formikValues: any;
}

const ElectionsListFilters = ({ formikValues }: props) => {
  return (
    <FormWrapper formikValues={formikValues}>
      <>
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<SearchIcon color="gray.300" />}
            />
            <Field
              as={Input}
              id="search"
              name="search"
              placeholder="Search by title"
              pl={10}
              borderRadius={10}
            />
          </InputGroup>
        </FormControl>
      </>
    </FormWrapper>
  );
};

export default ElectionsListFilters;
