import styled from "styled-components"
import logoImg from '../../src/images/dd_store_logo.svg'
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)),
  url("https://cdn.wallpapersafari.com/24/78/Swq6Z2.jpg") center;
`;

const FormBackLink = styled.div`
  a {
    position: absolute;
    top: -30px;
    left: 0;
    color: #8A25B1;
    text-decoration: none;

    &:hover {
      color: #E100E6;
    }
  }
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 500px;
  padding: 50px;
  margin: 100px auto 0 auto;
  border: solid 1px #EEEEEE;
  border-radius: 10px;
  background-color: #F9F9F9;
`;

const Button = styled.button`
  background-color: #8A25B1;
  border-color: #8A25B1;

  &:hover {
    background-color: #E100E6;
    border-color: #E100E6;
  }
`;

const Login = () => {
    const sendLogin = (e) => {
        const formData = new FormData(e.target);

        axios
            .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
                    username: formData.get('username'),
                    password: formData.get('password')
                }
            )
            .then(res => {
                sessionStorage.setItem('user.id', res.data.id);
                sessionStorage.setItem('user.username', res.data.username);
                sessionStorage.setItem('user.email', res.data.email);
                sessionStorage.setItem('user.isAdmin', res.data.isAdmin);
                sessionStorage.setItem('user.token', res.data.accessToken);
                window.location.pathname = "/";
            })
            .catch(err => {
                alert(err.response.data);
            });
        e.preventDefault();
    }

    return (
        <Container>
            <Form action="#" method="post" onSubmit={sendLogin}>
                <FormBackLink>
                    <a href="/">&lsaquo; Back to store</a>
                </FormBackLink>

                <div className="text-center mb-5">
                    <img src={logoImg} alt="DD Store Logo" height="72"/>
                </div>

                <div className="mb-2">
                    <label htmlFor="username">Username</label>
                    <input className="form-control" name="username"/>
                </div>

                <div className="mb-2">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" name="password" type='password'/>
                </div>

                <div className="text-center">
                    <Button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Login</Button>
                </div>
            </Form>
        </Container>
    )
};

export default Login;