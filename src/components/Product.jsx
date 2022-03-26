import styled from "styled-components"
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import axios from "axios";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: linen;
    position: relative;
  
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;



const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({product}) =>  {
    const addToCart = async () => {
        let order = JSON.parse(localStorage.getItem('order'));

        if (!order) {
            const headers = {token: sessionStorage.getItem('user.token')};
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/orders`,
                {userId: sessionStorage.getItem('user.id')},
                {headers: headers});

            order = res.data;
        }

        const orderProductIndex = order.products.findIndex((p => p.productId === product._id));

        if (orderProductIndex >= 0) {
            order.products[orderProductIndex].quantity += 1;
        } else {
            order.products.push({
                productId: product._id,
                quantity: 1
            })
        }
        order.amount += product.price;

        axios
            .put(`${process.env.REACT_APP_API_URL}/orders/${order._id}`, order)
            .then(res => {
                localStorage.setItem('order', JSON.stringify(res.data));
                window.location.reload();
            });
    };

   return (
        <Container>
            <Circle/>
            <Image src={product.image}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined onClick={() => addToCart()}/>
                </Icon>
                <Icon>
                    <a href={`/product/${product._id}`} className='text-black'><SearchOutlined/></a>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
         </Container>
        );
}

export default Product;