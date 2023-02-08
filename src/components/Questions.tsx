import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { Field, FieldArray, useFormikContext } from 'formik';

interface valueProps {
  questions: question[];
}

interface question {
  title: string;
  description: string;
  options: string[];
}

const Questions = () => {
  const { values } = useFormikContext<valueProps>();

  return (
    <FieldArray name="questions">
      {({ push }) => (
        <>
          {values.questions.map((question, index) => (
            <Box key={index} w="full">
              {/*Question title/description */}
              <Text>Question {index + 1}</Text>
              <FormControl>
                <FormLabel htmlFor={`qtitle{index}`}>Title</FormLabel>
                <Field
                  as={Input}
                  id={`qtitle{index}`}
                  name={`questions.${index}.title`}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor={`qdescription{index}`}>
                  Description
                </FormLabel>
                <Field
                  as={Input}
                  id={`qdescription{index}`}
                  name={`questions.${index}.description`}
                />
              </FormControl>
              {/* <Options options={question.options} index={index} /> */}
              <FieldArray name={`questions.${index}.options`}>
                {({ push, remove }) => (
                  <>
                    {question.options.map((_, idx) => (
                      <Box key={idx}>
                        <FormControl>
                          <FormLabel htmlFor={`option{index}`}>
                            Option {idx + 1}
                          </FormLabel>
                          <Field
                            as={Input}
                            id={`option{index}`}
                            name={`questions.${index}.options.${idx}`}
                          />
                        </FormControl>
                        <Button type="button" onClick={() => remove(index)}>
                          Delete option
                        </Button>
                      </Box>
                    ))}
                    <Button type="button" onClick={() => push('')}>
                      Add option
                    </Button>
                  </>
                )}
              </FieldArray>
            </Box>
          ))}
          <Button
            onClick={() =>
              push({
                title: '',
                description: '',
                options: ['', ''],
              })
            }
          >
            Add question
          </Button>
        </>
      )}
    </FieldArray>
  );
};

export default Questions;
