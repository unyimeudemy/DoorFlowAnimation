import styled from "styled-components";
import YourHomeYourRules from "./components/YourHomeYourRules";
import lampOn from "./images/lamp-on.webp"
import lampOff from "./images/lamp-off.webp"


const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Lamp = styled.img`
    width: 670px;
    height: 670px;
    position: absolute;
    top: 500px;
    left: 430px;
    z-index: 2;
`




const HomePage = () => {
    return (
        <Container>
            {/* <Lamp src={lampOn}/> */}
            <Lamp src={lampOn}/>
            <YourHomeYourRules/>
        </Container>
    )
}

export default HomePage;