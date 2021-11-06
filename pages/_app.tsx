import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        height={5}
        color="#4338c9"
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
