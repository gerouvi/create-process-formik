import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <Box p={4} bg="gray.100" borderRadius={8}>
      <Box as="fieldset" p={4} pt={2} borderRadius={8} bg="white">
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Text as="legend" whiteSpace="nowrap">
            {t('form:header')}
          </Text>
          <FormControl display="flex" justifyContent="end" alignItems="center">
            <FormLabel htmlFor="weighted" pt={2}>
              {t('form:weightedVote')}
            </FormLabel>
            <Field as={Checkbox} id="weighted" name="weightedVote.active" />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel htmlFor="title">{t('form:title')}</FormLabel>
          <Field as={Input} id="title" name="title" aria-required="true" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">{t('form:description')}</FormLabel>
          <Field
            as={Input}
            id="description"
            name="description"
            aria-required="true"
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Header;
