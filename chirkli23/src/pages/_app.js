import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/scss/style.css'
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
