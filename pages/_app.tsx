import { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/layout.css';

/**
 * Root level component for all pages
 * @param {ReactComponentElement} Component Page component to be rendered
 * @param {object} pageProps All props for the page
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-7CM06GHEVY`}
      />

      <Script strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments);            
          }
          gtag('js', new Date());

          gtag('config', 'G-7CM06GHEVY');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
