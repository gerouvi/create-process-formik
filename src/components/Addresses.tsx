import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field, FieldArray, useFormikContext } from 'formik';

interface valueProps {
  addresses: addresses[];
}

interface addresses {
  address: string;
  weight: number;
}

const Addresses = () => {
  const { values } = useFormikContext<valueProps>();

  return (
    <FieldArray name="addresses">
      {({ push, remove }) => (
        <>
          {values.addresses.map((_, index) => (
            <FormControl key={index}>
              <FormLabel htmlFor={`Address{index}`}>
                Address {index + 1}
              </FormLabel>
              <Field
                as={Input}
                id={`Address{index}`}
                name={`addresses.${index}.address`}
              />
              <Button type="button" onClick={() => remove(index)}>
                Delete address
              </Button>
            </FormControl>
          ))}

          <Button type="button" onClick={() => push('')}>
            Add address
          </Button>
        </>
      )}
    </FieldArray>
  );
};

export default Addresses;
