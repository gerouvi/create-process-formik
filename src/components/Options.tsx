import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field, FieldArray } from 'formik';

interface optionsProps {
  options: string[];
  index: number;
}

const Options = ({ options, index }: optionsProps) => {
  return (
    <FieldArray name={`questions.${index}.options`}>
      {({ push, remove }) => (
        <>
          {options.map((_, idx) => (
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
  );
};

export default Options;
