import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Success from "./Success";


const Pay = () => {
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
                console.log("this is the checkout info");
                console.log(res.data);
                // navigate.push("/success");
            } catch (err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, navigate]);


    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            {stripeToken ? (<Success/>) : (
                <StripeCheckout
                    name="Diany Disney Store"
                    image="https://www.disneyplusinformer.com/wp-content/uploads/2021/12/Encanto-Avatar.png"
                    billingAddress
                    shippingAddress
                    description="Your total is $ 10"
                    amount={1000}
                    token={onToken}
                    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                >
                </StripeCheckout>
            )}
        </div>
    );
}
export default Pay;