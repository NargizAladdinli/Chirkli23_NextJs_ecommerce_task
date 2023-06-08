import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/scss/style.css'
import Layout from '@/components/layout/Layout';
import { ThemeProvider } from '@/context/theme.context';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  )
}
