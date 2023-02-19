import { Flex } from '@chakra-ui/react';
import { Form, FormikProvider } from 'formik';

interface props {
  formikValues: any;
  children: JSX.Element;
}

const FormWrapper = ({ formikValues, children, ...props }: props) => (
  <FormikProvider value={formikValues}>
    <Form {...props}>
      <Flex
        as="fieldset"
        direction="column"
        gap={4}
        m="16px auto"
        p={4}
        borderRadius={12}
        width={{ base: '90%', lg: '650px' }}
        boxShadow="0px 0px 8px 2px rgba(69,69,69,0.3)"
      >
        {children}
      </Flex>
    </Form>
  </FormikProvider>
);

export default FormWrapper;
