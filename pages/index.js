import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Enquiry from "../components/Enquiry";
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
      <title>Distinct Cloud Labs - Custom web and mobile apps development for startups.</title>
      <meta name="title" content="Distinct Cloud Labs - Custom web and mobile apps development for startups" />
      <meta name="description" content="Distinct Cloud Labs - Custom web and mobile apps development. We make mobile apps, web solutions for startups, mid-sized businesses, and enterprises." />
      <meta name="keywords" content="software development, platform development, ios development, android development, web development, ai development, machine learning platform, fundraising, market research, architecture" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English"></meta>

      {/* <script type="text/javascript" src="js/typeform.js"></script> */}
    </Head>

    
    <Enquiry> </Enquiry>

    <Header></Header>
    <Banner></Banner>
    <Parteners></Parteners>
    <WhatWeDo></WhatWeDo>
    <FactArea></FactArea>
    <Services></Services>
    {/* <OurTeam></OurTeam> */}
    <Feedback></Feedback>
    <Blog></Blog>
    <Newsletter></Newsletter>

    <Footer></Footer>
    <div className="go-top">
      <ArrowUpwardIcon />
    </div>


  </div>
);

export default Home;
