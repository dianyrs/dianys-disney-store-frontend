 import styled from "styled-components"
 import {ArrowBack, ArrowLeftOutlined, ArrowRight, ArrowRightOutlined} from "@material-ui/icons";


 const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: lightpink;
  position: relative;
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
  right: ${props=> props.direction === "right" && "10px"};
  left: ${props=> props.direction === "left" && "10px"};
  left: 10px;
  margin: auto;
 `;

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
               <ArrowLeftOutlined/>
            </Arrow>
            <Arrow direction="right">
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}


export default Slider