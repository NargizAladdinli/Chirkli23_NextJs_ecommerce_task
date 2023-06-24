import "bootstrap/dist/css/bootstrap.css";
import "@/styles/scss/style.css";
import Layout from "@/components/layout/Layout";
import { ThemeProvider } from "@/context/theme.context";
import ProductProvider from "@/context/product.context";
import SidebarProvider from "@/context/Sidebar";
import CartProvider from "@/context/cart.context";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <CartProvider>
        <ProductProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProductProvider>
        </CartProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
