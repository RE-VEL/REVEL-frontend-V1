import '../styles/globals.css';
import '../styles/font.css';
import type { AppProps } from 'next/app';
import Header from '../components/common/header/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
