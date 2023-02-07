import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { Field, FieldArray, useFormikContext } from 'formik';
import Options from './Options';

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
              <Options options={question.options} index={index} />
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
