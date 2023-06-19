import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/scss/style.css'
import Layout from '@/components/layout/Layout';
import { ThemeProvider } from '@/context/theme.context';
import ProductProvider from '@/context/product.context';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ProductProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
      </ProductProvider>
    </ThemeProvider>
  )
}
