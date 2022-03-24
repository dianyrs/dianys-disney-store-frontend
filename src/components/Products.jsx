import styled from "styled-components";
import {bestSellersProducts} from "../data";
import Product from "./Product";


const Container = styled.div`
    padding: 20px;
    position: 10px;
    display: flex;
    flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
    return (
        <Container>

            {bestSellersProducts.map((item) => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    );
};

export default Products;