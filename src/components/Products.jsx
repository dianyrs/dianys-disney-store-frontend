import styled from "styled-components";
import Product from "./Product";
import {useEffect, useState} from "react";
import axios from "axios";


const Container = styled.div`
    margin-top: 6%;
    padding: 20px;
    position: 10px;
    display: flex;
    flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({filter}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const dataFilter = filter || {}

        if (filter) {
            if (filter.category && filter.category.length > 0) dataFilter.category = filter.category;
            if (filter.gender && filter.gender.length > 0) dataFilter.gender = filter.gender;
            if (filter.size && filter.size.length > 0) dataFilter.size = filter.size;
            if (filter.sort && filter.sort.length > 0) dataFilter.sort = filter.sort;
        }

        axios
            .get(`${process.env.REACT_APP_API_URL}/products/all-products`,
                {
                    params: filter
                })
            .then(res => {
                setProducts(res.data);
            });
    }, [filter, setProducts]);

    return (
        <Container>
            {products.length > 0 ? products.map((product) => (
                <Product product={product} key={product._id}/>
            )) : <h4 className="text-center w-100 text-muted">Oops! Sorry, we are out of this product</h4>}
        </Container>
    );
};

export default Products;