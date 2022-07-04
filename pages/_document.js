import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <base href="/" />

          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/animate.min.css" />
          <link rel="stylesheet" href="/assets/css/meanmenu.css" />
          <link rel="stylesheet" href="/assets/css/boxicons.min.css" />
          {/* <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" /> */}
          {/* <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" /> */}
          <link rel="stylesheet" href="/assets/css/flaticon.css" />
          {/* <link rel="stylesheet" href="/assets/css/odometer.min.css" /> */}
          <link rel="stylesheet" href="/assets/css/slick.min.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/responsive.css" />
          {/* <title>Distinct Cloud Labs</title> */}
          <link rel="icon" type="image/png" href="assets/img/favicon.png" />

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MLQB9JN');`,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script
            data-cfasync="false"
            src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          ></script> */}
          {/* <script src="https://unpkg.com/feather-icons"></script> */}
          {/* <script src="path/to/dist/feather.js"></script> */}
          {/* <script src="assets/js/jquery.min.js"></script>
          <script src="assets/js/popper.min.js"></script>
          <script src="assets/js/bootstrap.min.js"></script>
          <script src="assets/js/meanmenu.min.js"></script>
          <script src="assets/js/wow.min.js"></script> */}
          {/* <script src="assets/js/magnific-popup.min.js"></script> */}
          {/* <script src="assets/js/appear.min.js"></script> */}
          {/* <script src="assets/js/odometer.min.js"></script> */}
          {/* <script src="assets/js/slick.min.js"></script>
          <script src="assets/js/imagesloaded.pkgd.min.js"></script>
          <script src="assets/js/isotope.pkgd.min.js"></script>
          <script src="assets/js/owl.carousel.min.js"></script> */}
          {/* <script src="assets/js/feather.min.js"></script> */}
          {/* <script src="assets/js/form-validator.min.js"></script> */}
          {/* <script src="assets/js/contact-form-script.js"></script> */}
          {/* <script src="assets/js/startp-map.js"></script> */}
          {/* <script src="assets/js/main.js"></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
