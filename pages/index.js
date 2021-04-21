import React from 'react'
import Head from 'next/head'
import Header from "../components/Header"
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import WhatWeDo from '../components/WhatWeDo'
import Services from '../components/Services'
import OurTeam from '../components/OurTeam'
import FactArea from '../components/FactArea'
import Feedback from '../components/Feedback'
import Parteners from '../components/Parteners'
import Blog from '../components/Blog'
import Newsletter from '../components/Newsletter'

const Home = () => (
  <div>
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
    <div className="go-top"><i data-feather="arrow-up" /></div>
  </div>
);

export default Home
