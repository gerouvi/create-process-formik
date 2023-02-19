import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Field, FieldArray, useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';

interface valueProps {
  questions: question[];
}

interface question {
  title: string;
  description: string;
  options: string[];
}

const CreateProcessQuestions = () => {
  const { values } = useFormikContext<valueProps>();
  const { t } = useTranslation();

  return (
    <FieldArray name="questions">
      {({ push, remove }) => (
        <Flex
          as="fieldset"
          direction="column"
          gap={4}
          p={4}
          bg="gray.100"
          borderRadius={8}
        >
          <HStack
            justifyContent="space-between"
            bg="white"
            p={4}
            borderRadius={8}
          >
            <Text as="legend">{t('form:questions')}</Text>
            <IconButton
              type="button"
              icon={<AddIcon />}
              aria-label={t('form:aria:addQuestion')}
              onClick={() =>
                push({
                  title: '',
                  description: '',
                  options: ['', ''],
                })
              }
            />
          </HStack>
          {values.questions.map((question, index) => (
            <Box key={index} bg="white" p={4} borderRadius={8}>
              {/*Question title/description */}

              <HStack justify="space-between" mb={4}>
                <Text textDecoration="underline">
                  {t('form:question', { index: index + 1 })}
                </Text>
                <IconButton
                  type="button"
                  icon={<DeleteIcon />}
                  aria-label={t('form:aria:deleteQuestion')}
                  onClick={() => remove(index)}
                />
              </HStack>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor={`qtitle${index}`}>
                    {t('title', { ns: 'form' })}
                  </FormLabel>
                  <Field
                    as={Input}
                    id={`qtitle${index}`}
                    name={`questions.${index}.title`}
                    aria-required="true"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={`qdescription${index}`}>
                    {t('form:description')}
                  </FormLabel>
                  <Field
                    as={Input}
                    id={`qdescription${index}`}
                    name={`questions.${index}.description`}
                    aria-required="true"
                  />
                </FormControl>
              </VStack>
              {/* Question options */}
              <FieldArray name={`questions.${index}.options`}>
                {({ push, remove }) => (
                  <>
                    <HStack justifyContent="space-between" mb={4} mt={8}>
                      <Text>{t('form:options')}</Text>
                      <IconButton
                        type="button"
                        icon={<AddIcon />}
                        aria-label={t('form:aria:addOption')}
                        onClick={() => push('')}
                      />
                    </HStack>
                    {question.options.map((_, idx) => (
                      <Box key={idx} mb={4}>
                        <FormControl>
                          <HStack justify="space-between" mb={2}>
                            <FormLabel
                              htmlFor={`qoption${index}${idx}`}
                              mt="8px"
                            >
                              {t('option', { ns: 'form', index: idx + 1 })}
                            </FormLabel>
                            <IconButton
                              type="button"
                              icon={<DeleteIcon />}
                              aria-label={t('form:aria:deleteOption')}
                              onClick={() => remove(idx)}
                            />
                          </HStack>
                          <Field
                            as={Input}
                            id={`qoption${index}${idx}`}
                            name={`questions.${index}.options.${idx}`}
                            aria-required={idx < 2}
                          />
                        </FormControl>
                      </Box>
                    ))}
                  </>
                )}
              </FieldArray>
            </Box>
          ))}
        </Flex>
      )}
    </FieldArray>
  );
};

export default CreateProcessQuestions;
