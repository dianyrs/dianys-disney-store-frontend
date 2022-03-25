import styled from "styled-components"
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Add, Remove} from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const Image = styled.img`
    margin-top: 5%;
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const ImgContainer = styled.div`
    flex:1;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOpt = styled.option``;

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
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src ="https://slimages.macysassets.com/is/image/MCY/products/3/optimized/10634723_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp" alt={'T-shirt'} />
                </ImgContainer>
                <InfoContainer>
                    <Title>Disney Mickey Mouse Flag T-Shirt</Title>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="red"/>
                            <FilterColor color="purple"/>
                            <FilterColor color="pink"/>
                            <FilterColor color="green"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOpt>XS</FilterSizeOpt>
                                <FilterSizeOpt>S</FilterSizeOpt>
                                <FilterSizeOpt>M</FilterSizeOpt>
                                <FilterSizeOpt>L</FilterSizeOpt>
                                <FilterSizeOpt>XL</FilterSizeOpt>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default ProductPage;