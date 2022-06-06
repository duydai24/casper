import "../src/styles/globals.css";
import "../src/styles/globals.scss";
// import {Helmet} from 'react-helmet';

// const TITLE = "Casper Dash"

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Helmet>
  <title>{TITLE}</title>
</Helmet> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
