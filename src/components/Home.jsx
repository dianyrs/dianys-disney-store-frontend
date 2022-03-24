import React from 'react'
import Announcement from "./Announcement";
import Navbar from './Navbar'
import Slider from "./Slider";
import Categories from "./Categories";
import Products from "./Products"
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default Home;