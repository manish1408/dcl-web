// // global styles are required to be added to `_app.js` per Next.js requirements.
// import "nprogress/nprogress.css";

// const TopProgressBar = dynamic(
//   () => {
//     return import("components/TopProgressBar");
//   },
//   { ssr: false }
// );

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <TopProgressBar />
//       <Component {...pageProps} />
//     </>
//   );
// }
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
