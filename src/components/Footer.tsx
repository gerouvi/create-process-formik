import { Box, Button, Flex } from '@chakra-ui/react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const lngs: any = {
  en: { nativeName: 'english' },
  cat: { nativeName: 'català' },
};

const Footer = () => {
  const { i18n } = useTranslation();
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      mt="auto"
    >
      <Box alignSelf="end">
        {Object.keys(lngs).map((lng) => (
          <Button
            type="submit"
            key={lng}
            onClick={() => i18next.changeLanguage(lng)}
            isDisabled={i18next.resolvedLanguage === lng}
            _disabled={{ cursor: 'default' }}
          >
            {lngs[lng].nativeName}
          </Button>
        ))}
      </Box>
    </Flex>
  );
};

export default Footer;
