import "@/styles/globals.css";
import Head from "next/head";
import Layout from "@/components/Layout/layout";
import CartProvider from "@/context/CartProvider";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Head>
          <title>E-commerce</title>
          <meta
            name="description"
            content="an eCommerce website that minimalistic and simple design lifestyle enthusiasts can buy from"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            type="image/svg+xml"
            sizes="any"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛒</text></svg>"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
