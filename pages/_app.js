import '../styles/globals.css';
import Layout from '../components/layout/Layout';

export default function App({ Component, pageProps }) {
  // Pages can opt out of the default Layout by setting `Component.noLayout = true`
  if (Component.noLayout) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

