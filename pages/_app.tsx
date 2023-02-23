import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from "nextjs-google-analytics";

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

/* Page Loader */
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics
        gaMeasurementId="G-LXTEPCXYFD"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
