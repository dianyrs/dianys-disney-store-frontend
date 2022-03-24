import styled from "styled-components"
import logoImg from "../images/dd_store_logo.svg";
import React from "react";
import {Instagram, Twitter, WhatsApp, Facebook, Room, Phone, Mail, Payment} from "@material-ui/icons";



const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  
`;

const Logo = styled.h1``;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;


const Title = styled.h3`

`;


const Footer = () => {
    return(
        <Container>
            <Left>
                <Logo style={{color: "purple"}}><img src={logoImg} alt={'DD Store Logo'} width={250}/></Logo>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="088201" >
                        <WhatsApp/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room/>
                    4011 SW 112th Ave, Miami, FL, 33165
                </ContactItem>
                <ContactItem> <Phone/>
                    +1 786 343 8201
                </ContactItem>
                <ContactItem> <Mail/>
                   dianydisney@gmail.com
                </ContactItem>
                <Payment/><img src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer;