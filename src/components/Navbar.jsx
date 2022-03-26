import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@mui/material";
import logoImg from '../images/dd_store_logo.svg'
import {Link} from "react-router-dom";
import axios from "axios";

const Container = styled.div``

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 35px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
`

const signOut = () => {
    sessionStorage.clear();
    window.reload();
}

const SessionInfo = () => {
    if (sessionStorage.getItem('user.token')) {
        return (
            <>
                <MenuItem>Welcome {sessionStorage.getItem('user.username')}</MenuItem>
                <MenuItem><Link to="#" onClick={signOut}>Sign out</Link></MenuItem>
            </>
        )
    }

    return (
        <>
            <MenuItem><Link to="/register">Register</Link></MenuItem>
            <MenuItem><Link to="/login">Sign In</Link></MenuItem>
        </>
    )
}

const Navbar = ({orderProductsCount}) => {
    const [itemsCount, setItemsCount] = useState(orderProductsCount || 0);

    useEffect(() => {
        if (!orderProductsCount) {
            const order = JSON.parse(localStorage.getItem('order'))

            if (order) {
                setItemsCount(order.products.reduce((itemsCount, currentProduct) => itemsCount + currentProduct.quantity, 0));
            } else {
                setItemsCount(0);
            }
        }
    }, [orderProductsCount]);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language></Language>
                    <a href='/'>
                        <Logo style={{color: "purple"}}>
                            <img src={logoImg} alt={'DD Store Logo'} width={250}/>
                        </Logo>
                    </a>
                </Left>
                <Right>
                    <SessionInfo/>
                    <MenuItem>
                        <a href={'/cart'} className="text-black">
                            <Badge badgeContent={itemsCount} color="secondary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </a>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;