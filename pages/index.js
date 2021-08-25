import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import WhatWeDo from "../components/WhatWeDo";
import Services from "../components/Services";
import OurTeam from "../components/OurTeam";
import FactArea from "../components/FactArea";
import Feedback from "../components/Feedback";
import Parteners from "../components/Parteners";
import Blog from "../components/Blog";
import Newsletter from "../components/Newsletter";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Home = () => (

  <div>

    <Head>
      <title>Distinct Cloud Labs - Cloud Product Development services</title>
      <meta name="title" content="Distinct Cloud Labs - Cloud Product Development services" />
      <meta name="description" content="Distinct cloud offers a suite of software products and services in web, mobile, analytics, complex algos and AI" />
      <meta name="keywords" content="software development, platform development, ios development, android development, web development, ai development, machine learning platform, fundraising, market research, architecture" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English"></meta>

      <script type="text/javascript" src="js/typeform.js"></script>
    </Head>
    <Header></Header>

    <Banner></Banner>
    <WhatWeDo></WhatWeDo>
    <Services></Services>
    <OurTeam></OurTeam>
    <FactArea></FactArea>
    <Feedback></Feedback>
    <Parteners></Parteners>
    <Blog></Blog>
    <Newsletter></Newsletter>

    <Footer></Footer>
    <div className="go-top">
      <ArrowUpwardIcon />
    </div>
  </div>
);

export default Home;
