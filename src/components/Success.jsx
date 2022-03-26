import React, {Component} from 'react';
import encanto from '../encanto.png';
import styled from "styled-components";
import logoImg from '../images/dd_store_logo.svg'
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)),
  url("https://cdn.wallpapersafari.com/24/78/Swq6Z2.jpg") center;
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
`

const Success = () => {
    return (
        <Container>
            <div>

            </div>
            <Center>
                <Logo style={{color: "purple"}}>
                    <a href="/">
                        <img src={logoImg} alt={'DD Store Logo'} width={350}/>
                    </a>
                </Logo>
            </Center>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="success-signal disney-font"
                 style={{
                     border: "none",
                     width: "120",
                     borderRadius: 5,
                     padding: "20px",
                     backgroundColor: "purple",
                     color: "white",
                     fontWeight: "700",
                 }}
            >
                <div><h1> Successfull!!</h1></div>
            </div>
            <br/>
            <div>
                <a href="/" className="text-black">&lsaquo; Back to store</a>
            </div>
            <div>
                <p className="confirmation">Your order is being prepared.</p>
            </div>
            <div>
                <p className="confirmation">Thanks for choosing Diany Disney Store</p>
            </div>
        </Container>
    );
}

export default Success;