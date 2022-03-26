import styled from "styled-components";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import {Add, Remove} from "@material-ui/icons";
import {Link, useNavigate} from "react-router-dom";
import {React, useEffect, useState} from "react";

import axios from "axios";
import CartProduct from "./CartProduct";
import Success from "./Success";
import StripeCheckout from "react-stripe-checkout";

const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #8A25B1;
    color: white;
    border: none;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  margin-top: 20px;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 20px;
  background-color: #8A25B1;
  color: white;
  cursor: pointer;
  border: 1px solid purple;
  font-weight: 600;

  &:hover {
    background-color: #E100E6;
  }
`;

const Cart = () => {
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            console.log('Stripe Token:', stripeToken);
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/checkout/payment`, {
                        tokenId: stripeToken.id,
                        amount: 1000,
                    }
                );

                let order = JSON.parse(localStorage.getItem('order'));
                order.status = 'completed'

                axios
                    .put(`${process.env.REACT_APP_API_URL}/orders/${order._id}`, order)
                    .then(res => {
                        order = res.data;
                        localStorage.removeItem('order');
                        window.location = '/success';
                    });
            } catch (err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, navigate]);

    let order = JSON.parse(localStorage.getItem('order'));

    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <br/>
                <br/>
                <Title>Your Bag</Title>
                <Top>
                    <a href="/all-products">
                        <Button>Continue Shopping</Button>
                    </a>
                </Top>
                {order && order.products.length > 0 ? (
                    <Bottom>
                        <Info>
                            <br/>
                            <br/>
                            {order.products.map(product => <CartProduct cartProduct={product}/>)}
                        </Info>
                        <Summary>
                            <SummaryTitle>Order Summary</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal: </SummaryItemText>
                                <SummaryItemPrice>${order.amount}.00</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total Amount: </SummaryItemText>
                                <SummaryItemPrice>${order.amount}.00</SummaryItemPrice>
                            </SummaryItem>
                            {/* Stripe checkout component */}
                            {/*{stripeToken ? (<Success/>) : (*/}
                                <StripeCheckout
                                    name="Diany Disney Store"
                                    image="https://www.disneyplusinformer.com/wp-content/uploads/2021/12/Encanto-Avatar.png"
                                    billingAddress
                                    shippingAddress
                                    description={`Your total is $${order.amount}.00`}
                                    amount={order.amount * 100}
                                    token={onToken}
                                    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                                >
                                    <Button>Pay Now</Button>
                                </StripeCheckout>
                            {/*)}*/}
                        </Summary>
                    </Bottom>
                ) : <h4 className="text-center w-100 text-muted">Your cart is empty</h4>}
            </Wrapper>

        </Container>
    )
}

export default Cart;