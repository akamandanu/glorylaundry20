import React from "react";
import HeroSection from "../component/HeroSection";
import LayananSection from "../component/LayananSection";
import "./Home.css";
import KeunggulanSection from "../component/KeunggulanSection";
import Navigasi from "../component/Navigasi";
import Footer from "../component/Footer";
import Lokasi from "../component/Lokasi";


function Home(){

    
    return(
        <div>
            <Navigasi/>
            <HeroSection/>
            <LayananSection id="layanan"/>
            <KeunggulanSection/>
            <Lokasi/>
            <Footer/>
        </div>
    );
}

export default Home;