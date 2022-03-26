import styled from "styled-components"
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Add, Remove} from "@material-ui/icons";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const Image = styled.img`
  margin-top: 5%;
  width: 100%;
  height: 90vh;
  object-fit: contain;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  margin-top: 3%;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const Size = styled.div`
  width: 50%;
  margin: 30px 0px;
  text-align: left;
`;

const SizeTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;


const Button = styled.button`
  padding: 15px;
  border: 1px solid purple;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid purple;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;


const ProductPage = () => {
    const params = useParams();
    const [orderProductsCount, setOrderProductsCount] = useState(0);
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(1);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/products/find/${params.id}`)
            .then(res => {
                setProduct(res.data);
            });

        let order = JSON.parse(localStorage.getItem('order'));

        if (order) {
            setOrderProductsCount(order.products.reduce((itemsCount, currentProduct) => itemsCount + currentProduct.quantity, 0));
        }
    }, [setProduct]);

    const addToCart = async () => {
        let order = JSON.parse(localStorage.getItem('order'));

        if (!order) {
            const headers = {token: sessionStorage.getItem('user.token')};
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/orders`,
                {userId: sessionStorage.getItem('user.id')},
                {headers: headers});

            order = res.data;
        }

        const orderProductIndex = order.products.findIndex((p => p.productId === product._id));

        if (orderProductIndex >= 0) {
            order.products[orderProductIndex].quantity += count;
        } else {
            order.products.push({
                productId: product._id,
                quantity: count
            })
        }
        order.amount += product.price * count;

        axios
            .put(`${process.env.REACT_APP_API_URL}/orders/${order._id}`, order)
            .then(res => {
                order = res.data;
                localStorage.setItem('order', JSON.stringify(order));
                window.location.reload();
            });
    };

    return (
        <Container>
            <Announcement/>
            <Navbar orderProductsCount={orderProductsCount}/>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.image} alt={product.title}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Price>${product.price}.00</Price>
                    <Size><SizeTitle>Size:</SizeTitle> {product.size}</Size>
                    <AddContainer>
                        <AmountContainer>
                            <a href='#' className='text-black'
                               onClick={() => setCount(Math.max(count - 1, 1))}><Remove/></a>
                            <Amount>{count}</Amount>
                            <a href='#' className='text-black'
                               onClick={() => setCount(Math.min(count + 1, product.count))}><Add/></a>
                        </AmountContainer>
                        <Button onClick={() => addToCart()}>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default ProductPage;