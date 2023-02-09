import {
  Checkbox,
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
    <>
      <Text as="legend">{t('form', { ns: 'form' })}</Text>
      <FormControl>
        <FormLabel htmlFor="weighted">{t('form:weightedVote')}</FormLabel>
        <Field as={Checkbox} id="weighted" name="weightedVote.active" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="title">{t('form:title')}</FormLabel>
        <Field as={Input} id="title" name="title" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="description">{t('form:description')}</FormLabel>
        <Field as={Input} id="description" name="description" />
      </FormControl>
    </>
  );
};

export default Header;
