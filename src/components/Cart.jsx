 import styled from "styled-components";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
      border: ${props => props.type === "filled"  && "none"};
      background-color: ${props => props.type === "filled"  ? "black" : "transparent"};
      color: ${props=> props.type === "filled"  && "white"};
 `;

 const TopTexts = styled.div``;
 const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
 `;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

`;
const Info = styled.div``;
const Summary = styled.div``;

 const Cart = () => {
    return (
        <Container>
           <Announcement/>
            <Navbar/>
                <Wrapper>
                    <Title>Your Bag</Title>
                    <Top>
                        <TopButton>Continue Shopping</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag (2)</TopText>
                            <TopText>Your Wishlist (0) </TopText>
                        </TopTexts>
                        <TopButton type="filled">Checkout Now</TopButton>
                    </Top>
                    <Bottom>
                        <Info>Info</Info>
                        <Summary>summary</Summary>
                    </Bottom>
                </Wrapper>
            <Footer/>
        </Container>
    )
 }

 export default Cart;