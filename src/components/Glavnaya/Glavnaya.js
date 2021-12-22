import React from "react";
import Header from "../Header/Header";
import Trainer from "../Trainer/Trainer";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Reviews from "../reviews/Reviews";
import Contact from "../Contact/Contact";


function Glavnaya(){
    return(
        <div>
            <Header/>
            <Trainer/>
            <About/>
            <Gallery/>
            <Reviews/>
            <Contact/>
        </div>
    )
}

export default Glavnaya;