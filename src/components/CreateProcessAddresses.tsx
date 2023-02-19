import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
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

const CreateProcessAddresses = () => {
  const { values, handleChange, setFieldValue } =
    useFormikContext<valueProps>();

  const { t } = useTranslation();

  return (
    <FieldArray name="addresses">
      {({ push, remove }) => (
        <Box p={4} bg="gray.100" borderRadius={8}>
          <Box as="fieldset" p={4} bg="white" borderRadius={8}>
            <HStack justify="space-between" mb={2}>
              <Text as="legend">{t('form:addresses')}</Text>
              <IconButton
                ml="auto"
                type="button"
                icon={<AddIcon />}
                aria-label={t('form:aria:addAddress')}
                onClick={() => push({ address: '', weight: 0 })}
              />
            </HStack>
            {values.addresses.map((_, index) => (
              <Box key={index} mb={4}>
                <FormControl>
                  <Flex alignItems="center" mb={2}>
                    <FormLabel htmlFor={`address${index}`} mt="8px">
                      {t('form:address', { index: index + 1 })}
                    </FormLabel>
                    {values.weightedVote.active && (
                      <InputGroup width="80px">
                        <Field
                          as={Input}
                          type="number"
                          aria-label={t('form:aria:weight')}
                          id={`weight{index}`}
                          name={`addresses.${index}.weight`}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleChange(e);
                            const totalWeight = values.addresses.reduce(
                              (acc, curr, idx) => {
                                if (idx !== index)
                                  return acc + Number(curr.weight);
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
                        <InputRightElement pointerEvents="none" children="%" />
                      </InputGroup>
                    )}

                    <IconButton
                      ml="auto"
                      type="button"
                      icon={<DeleteIcon />}
                      aria-label={t('form:aria:deleteAddress')}
                      onClick={() => remove(index)}
                    />
                  </Flex>
                  <Field
                    as={Input}
                    id={`address${index}`}
                    name={`addresses.${index}.address`}
                    aria-required={index < 2}
                  />
                </FormControl>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </FieldArray>
  );
};

export default CreateProcessAddresses;
