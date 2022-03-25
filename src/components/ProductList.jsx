import styled from "styled-components";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Products from "./Products";
import Footer from "./Footer";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
    margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>T-SHIRTS</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select className="form-select d-inline w-auto">
                        <Option disable selected >
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Pink</Option>
                        <Option>Purple</Option>
                    </Select>
                    <Select className="form-select d-inline w-auto">
                        <Option disable selected >
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter><FilterText>Sorter Products:</FilterText>
                    <Select className="form-select d-inline w-auto">
                        <Option selected >
                           Newest
                        </Option>
                        <Option>Price (Low to high)</Option>
                        <Option>Price (High to low)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Footer/>
        </Container>
    )
}

export default ProductList;