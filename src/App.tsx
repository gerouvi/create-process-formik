import { ChakraProvider, theme, useColorMode } from '@chakra-ui/react';
import {
  darkTheme,
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { RouterProvider } from 'react-router-dom';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, optimism, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import router from './router/router';

export const App = () => {
  const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  const { colorMode } = useColorMode();

  const rainbowStyles =
    colorMode === 'light'
      ? lightTheme({
          accentColor: '#78D8AA',
          accentColorForeground: 'white',
          borderRadius: 'medium',
        })
      : darkTheme({
          accentColor: '#78D8AA',
          accentColorForeground: 'white',
          borderRadius: 'medium',
        });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={rainbowStyles}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
