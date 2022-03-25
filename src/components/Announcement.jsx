import styled from "styled-components"

const Container = styled.div`
  height: 60px;
  background-color: purple;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Free Shipping on Orders Over $50!!
        </Container>
    )
}


export default Announcement;