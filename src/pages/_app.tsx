import "@/styles/globals.sass";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return(
  <Layout>
     <NextNProgress />
    <Component {...pageProps} />;
  </Layout>
  )
}
