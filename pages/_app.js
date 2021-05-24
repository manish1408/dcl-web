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

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
