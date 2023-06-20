import "bootstrap/dist/css/bootstrap.css";
import "@/styles/scss/style.css";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "@/context/theme.context";
import ProductProvider from "@/context/product.context";
import SidebarProvider from "@/context/Sidebar";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <ProductProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProductProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
