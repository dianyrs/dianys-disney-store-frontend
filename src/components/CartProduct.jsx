import styled from "styled-components"
import {Add, FavoriteBorderOutlined, Remove, SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import axios from "axios";
import {React, useEffect, useState} from "react";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const CartProduct = ({cartProduct}) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/products/find/${cartProduct.productId}`)
            .then(res => {
                setProduct(res.data);
            });
    }, [setProduct]);

    const updateCartProduct = async (amount) => {
        let order = JSON.parse(localStorage.getItem('order'));
        const orderProductIndex = order.products.findIndex((p => p.productId === cartProduct.productId));
        order.products[orderProductIndex].quantity += amount;
        order.amount += product.price * amount;

        if (order.products[orderProductIndex].quantity < 1) {
            order.products.splice(orderProductIndex, 1);
        }

        axios
            .put(`${process.env.REACT_APP_API_URL}/orders/${order._id}`, order)
            .then(res => {
                order = res.data;
                localStorage.setItem('order', JSON.stringify(order));
                window.location.reload();
            });
    };

    return (
        <Product>
            <ProductDetail>
                <Image src={product.image}/>
                <Details>
                    <ProductName><b>Product:</b>{product.title}</ProductName>
                    <ProductId><b>ID:</b>{product._id}</ProductId>
                    <ProductSize><b>Size:</b>{product.size}</ProductSize>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                    <a href='#' className='text-black' onClick={() => updateCartProduct(-1)}><Remove/></a>
                    <ProductAmount>{cartProduct.quantity}</ProductAmount>
                    <a href='#' className='text-black' onClick={() => updateCartProduct(1)}><Add/></a>
                </ProductAmountContainer>
                <ProductPrice>${product.price * cartProduct.quantity}.00</ProductPrice>
            </PriceDetail>
        </Product>
    );
}

export default CartProduct;