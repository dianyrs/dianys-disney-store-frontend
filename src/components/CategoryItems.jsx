import styled from 'styled-components';


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Info = styled.div`
  align-items: center;
  justify-content: center;

`;
const Title = styled.h1`
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid purple;
`;


const CategoryItems = ({product}) => {
    return (
        <Container>
            <Image src={product.image}/>
            <Info>
                <Title>{product.typeOfProduct}</Title>
                <a href={`/categories/${product.typeOfProduct}`}><Button>SHOP NOW</Button></a>
            </Info>
        </Container>
    )
}

export default CategoryItems;