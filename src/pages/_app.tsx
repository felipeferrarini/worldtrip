import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from 'components/Header';
import { theme } from 'styles/theme';

import 'swiper/swiper-bundle.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
