import styled from "styled-components";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Products from "./Products";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';


const Title = styled.h1`
  margin-top: 10px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -100px;
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

const ProductList = () => {
    const params = useParams();
    const defaultFilter = {}

    if (params.category) defaultFilter.category = params.category;

    const [filter, setFilter] = useState(defaultFilter);

    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Title>
                {params.category && params.category.length > 0 ? params.category : 'All Products'}&nbsp;
                in the Store
            </Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                    <Select className="form-select d-inline w-auto"
                            onChange={e => setFilter({...filter, size: e.target.value})}>
                        <option value=''>Size</option>
                        <option value='XS'>XS</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                    </Select>
                </Filter>
                <Filter><FilterText>Sorter Products:</FilterText>
                    <Select className="form-select d-inline w-auto"
                            onChange={e => setFilter({...filter, sort: e.target.value})}>
                        <option value=''>Newest</option>
                        <option value='price-low'>Price (Low to high)</option>
                        <option value='price-high'>Price (High to low)</option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products filter={filter}/>
            <Footer/>
        </div>
    )
}

export default ProductList;