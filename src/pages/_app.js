// This is the main entry point for the entire application.
// It wraps around every page, making it the perfect place for global styles.

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;