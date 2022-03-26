import styled from 'styled-components';
import CategoryItems from "./CategoryItems";
import {useEffect, useState} from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`

const Categories = ({products}) => {
    return (
        <Container>
            {products.map(product => <CategoryItems product={product} key={product._id}/>)}
        </Container>
    );
};

export default Categories;
