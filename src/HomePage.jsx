import styled from "styled-components";
import YourHomeYourRules from "./components/YourHomeYourRules";
import lampOn from "./images/lamp-on.webp"
import lampOff from "./images/lamp-off.webp"
import { useState } from "react";
import { motion } from 'framer-motion';



const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

// const Lamp = styled(motion.img)`
//     width: 670px;
//     height: 679px;
//     position: absolute;
//     top: 520px;
//     left: 472px;
//     z-index: 2;
// `

const Lamp = styled(motion.img)`
    width: 510px;
    height: 510px;
    position: absolute;
    top: 450px;
    right: 585px;
    z-index: 2;
`




const HomePage = () => {
    const [lampState, setLampState] = useState(false)


    return (
        <Container>
            {lampState ? <Lamp src={lampOn}/> : <Lamp src={lampOff}/>}
            <YourHomeYourRules
                setLampState={setLampState}
            />
        </Container>
    )
}

export default HomePage;