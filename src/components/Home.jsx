import React, {useEffect, useState} from 'react'
import Announcement from "./Announcement";
import Navbar from './Navbar'
import Slider from "./Slider";
import Categories from "./Categories";
import Products from "./Products"
import Footer from "./Footer";
import axios from "axios";
import Product from "./Product";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 6%;
    padding: 20px;
    position: 10px;
    display: flex;
    flex-wrap: wrap;
  justify-content: space-between;
`;

const Home = () => {
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/home`)
            .then(res => {
                setCategoryProducts(res.data.categoryProducts);
                setProducts(res.data.products);
            });
    }, [setProducts]);

    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories products={categoryProducts}/>
            <Container>
                {products.map((product) => (
                    <Product product={product} key={product._id}/>
                ))}
            </Container>
            <Footer/>
        </div>
    )
}

export default Home;