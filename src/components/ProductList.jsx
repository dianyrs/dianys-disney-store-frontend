import styled from "styled-components";
import Navbar from "./Navbar";
import Announcement from "./Announcement";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>T-SHIRTS</Title>
            <FilterContainer>
                <Filter>
                    filter 1
                </Filter>
                <Filter>
                    filter 2
                </Filter>
            </FilterContainer>
        </Container>
    )
}

export default ProductList;