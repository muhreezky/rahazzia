import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "@/components/layout/Layout";
import { SessionProvider } from "next-auth/react";
import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"]
});
const desc = "Aplikasi berkirim pesan anonim Rahazzia"
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <meta name="description" content={desc} />
        <meta name="robots" content="index,follow" />
        <meta name="og:title" content="Rahazzia" />
        <meta name="og:description" content={desc} />
      </Head>
      <SessionProvider session={session}>
        <style jsx global>
          {`
            html {
              font-family: ${roboto.style.fontFamily};
            }
          `}
        </style>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ThemeProvider>
  );
}
