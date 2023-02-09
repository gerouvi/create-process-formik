import { Box, Button, ChakraProvider, theme } from '@chakra-ui/react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import CreateProcess from './components/CreateProcess';

const lngs: any = {
  en: { nativeName: 'english' },
  cat: { nativeName: 'català' },
};

export const App = () => {
  const { i18n } = useTranslation();
  
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <ColorModeSwitcher justifySelf="flex-end" />
        {Object.keys(lngs).map((lng) => (
          <Button
            type="submit"
            key={lng}
            onClick={() => i18next.changeLanguage(lng)}
            isDisabled={i18n.resolvedLanguage === lng}
            _disabled={{ cursor: 'default' }}
          >
            {lngs[lng].nativeName}
          </Button>
        ))}
        <CreateProcess />
      </Box>
    </ChakraProvider>
  );
};
