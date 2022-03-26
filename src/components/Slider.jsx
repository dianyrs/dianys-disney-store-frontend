import styled from "styled-components";
import {ArrowBack, ArrowLeftOutlined, ArrowRight, ArrowRightOutlined} from "@material-ui/icons";
import React, {useState} from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${props => props.direction === "right" && "10px"};
  left: ${props => props.direction === "left" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 1000;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;

  margin: 50px 0px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid purple;
`;


const Slider = () => {
    const sliderItems = [
        {
            id: 1,
            img: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/2841041618986?fmt=webp&qlt=70&wid=643&hei=643",
            title: "CUSTOME SALE",
            desc: "GET 30% OFF FOR NEW ARRIVALS.",
            bg: "f5fafd",
            url: "/categories/Costumes"
        },
        {
            id: 2,
            img: "https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/4up-sq_clothing-boy_20220228_2x?fit=constrain&cropN=0,0,1,1&fmt=webp&qlt=70&wid=770",
            title: "Kids' Clothing",
            desc: "GET 20% OFF FOR NEW ARRIVALS.",
            bg: "fcf1ed",
            url: "/categories/Kids Clothing"
        },
        {
            id: 3,
            img: "https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/4up-sq_clothing-men_20220228_2x?fit=constrain&cropN=0,0,1,1&fmt=webp&qlt=70&wid=770",
            title: "ADULTS SALE",
            desc: "GET 30% OFF FOR NEW ARRIVALS.",
            bg: "f5fafi",
            url: "/categories/Clothing"
        }
    ];
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <a href={item.url}><Button>SHOW NOW</Button></a>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}


export default Slider