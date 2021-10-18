import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from 'components/Header';
import { theme } from 'styles/theme';
import NextNProgress from 'nextjs-progressbar';

import 'swiper/swiper-bundle.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <NextNProgress
        color={theme.colors.yellow[500]}
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
