import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field, FieldArray, useFormikContext } from 'formik';

interface valueProps {
  addresses: addresses[];
  weightedVote: weightedVote;
}

interface addresses {
  address: string;
  weight: number;
}

interface weightedVote {
  active: boolean;
  total: number;
}

const Addresses = () => {
  const { values } = useFormikContext<valueProps>();

  return (
    <FieldArray name="addresses">
      {({ push, remove }) => (
        <>
          {values.addresses.map((_, index) => (
            <Box key={index} w="full">
              <FormControl>
                <FormLabel htmlFor={`address{index}`}>
                  Address {index + 1}
                </FormLabel>
                <Field
                  as={Input}
                  id={`address{index}`}
                  name={`addresses.${index}.address`}
                />
              </FormControl>
              {values.weightedVote.active && (
                <FormControl>
                  <FormLabel htmlFor={`weight{index}`}>Weight</FormLabel>
                  <Field
                    as={Input}
                    type="number"
                    id={`weight{index}`}
                    name={`addresses.${index}.weight`}
                  />
                </FormControl>
              )}
              <Button type="button" onClick={() => remove(index)}>
                Delete address
              </Button>
            </Box>
          ))}

          <Button
            type="button"
            onClick={() => push({ address: '', weight: 0 })}
          >
            Add address
          </Button>
        </>
      )}
    </FieldArray>
  );
};

export default Addresses;
