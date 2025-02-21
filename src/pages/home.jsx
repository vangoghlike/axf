import React, { useEffect } from 'react';
import { Parallax } from "react-parallax";
import { Helmet } from 'react-helmet-async';
import Navbar from '../layout/Navbar';
import Preloader from '../layout/preloader';
import SwiperComponent from '../section-pages/slider-home';
import Section1 from '../section-pages/section-1';
import Servers from '../section-pages/Server';
import Collection from '../section-pages/Collection';
import Help from '../section-pages/help';
import Download from '../section-pages/Download';
import Tokenomics from '../section-pages/Tokenomics';
import Footer from '../section-pages/footer';
import ScrollToTopBtn from '../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const image1 ="./img/background/3.webp";

const GlobalStyles = createGlobalStyle`
  .navbar-brand .imginit{
      width:75%;
    }
    .navbar-brand .imgsaly{
      display: none !important;
    }
`;

export default function Home() {
  useEffect(() => {
      if (typeof window !== 'undefined') {
          const loader = document.getElementById('mainpreloader');
          if (loader)
          setTimeout(() => {
            loader.classList.add("fadeOut");
            loader.style.display = 'none';
          }, 600)
      }
    }, []);
  return (
    <>

    {/* HEAD */}
    <Helmet>
      <link rel="icon" href="./img/icon.png" />
      <title>axf | Game · AI · DeFi</title>
    </Helmet>

    <GlobalStyles/>

    {/* LOADER */}
    <div id='mainpreloader'>
      <Preloader/>
    </div>

    {/* MENU */}
    <div className="home dark-scheme">
      <header id="header-wrap">
         <Navbar />
      </header>

      {/* slider */}
      <section className="no-padding" id="home">
        <SwiperComponent />
      </section>

      {/* section 1 */}
      <section className="no-bottom" id="about">
        <Section1/>
      </section>

      {/* section 4 */}
      <section className="no-bottom" id="server">
        <Servers/>
      </section>

      {/* section 5 */}
      <Parallax className="" bgImage={image1} strength={300}>  
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <section className="no-bg" id="games">
          <Collection/>
        </section>
      </Parallax>

      {/* section 6 */}
      <section className="no-top no-bottom" id="how">
        <Help/>
      </section>

      {/* section 8 */}
      <section className="">
        <Tokenomics/>
      </section>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}
