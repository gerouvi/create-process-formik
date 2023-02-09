import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field, FieldArray, useFormikContext } from 'formik';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface valueProps {
  addresses: addresses[];
  weightedVote: weightedVote;
}

interface addresses {
  address: string;
  weight: number | undefined;
}

interface weightedVote {
  active: boolean;
  total: number;
}

const Addresses = () => {
  const { values, handleChange, setFieldValue } =
    useFormikContext<valueProps>();
  const { t } = useTranslation();
  return (
    <FieldArray name="addresses">
      {({ push, remove }) => (
        <>
          {values.addresses.map((_, index) => (
            <Box key={index} w="full">
              <FormControl>
                <FormLabel htmlFor={`address{index}`}>
                  {t('form:address', { index: index + 1 })}
                </FormLabel>
                <Field
                  as={Input}
                  id={`address{index}`}
                  name={`addresses.${index}.address`}
                />
              </FormControl>
              {values.weightedVote.active && (
                <FormControl>
                  <FormLabel htmlFor={`weight{index}`}>
                    {t('form:weight')}
                  </FormLabel>
                  <Field
                    as={Input}
                    type="number"
                    id={`weight{index}`}
                    name={`addresses.${index}.weight`}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      handleChange(e);
                      const totalWeight = values.addresses.reduce(
                        (acc, curr, idx) => {
                          if (idx !== index) return acc + Number(curr.weight);
                          return acc;
                        },
                        0
                      );
                      setFieldValue(
                        'weightedVote.total',
                        totalWeight + Number(e.target.value)
                      );
                    }}
                  />
                </FormControl>
              )}
              <Button type="button" onClick={() => remove(index)}>
                Delete Address
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
