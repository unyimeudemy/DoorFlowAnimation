import { useAnimationControls, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Arrow from "./Arrow";
import DoorCardDetails from "./DoorCardDetails";
import SunsetCardDetails from "./SunsetCardDetails";
import LampCardDetails from "./LampCardDetails";
import replay from "../images/replay.svg"
import bigDoor from "../images/door-big.svg"
import smallDoor from "../images/door-small.svg"




const Container = styled.div`
    width: 700px;
    height: 800px;
    display: flex;

`

const Left = styled.div`
    width: 240px;
    height: 800px;
`

const Right = styled.div`
    width: 430px;
    height: 800px;
    margin-left: 50px;
    z-index: 4;
`
const SmallItem = styled(motion.div)`
    width: 50px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: -22px;
    margin-left: -30px;
    z-index: 2;
`
const BigItem = styled.div`
    width: 100px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;

`

const LeftWrapper = styled.div`
 
    display: flex;
    margin-top: 53px;
    margin-left: 150px;
`

const CardsContainer = styled.div`
    width: 400px;
    height: 650px;
`

const CardWrapper = styled.div`
    width: 400px;
    height: 120px;
`

const ArrowSection = styled.div`
    width: 400px;
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`

const Text = styled.div`
    font-family: Roboto;
    font-weight: bold;
    font-size: 23px;
    color: #333333;
    margin-bottom: 15px;
`



const Card = styled(motion.div)`
    width: 400px;
    height: 80px;
    background: #FFFFFF;
    margin-top: 5px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.06);

`

const ReplayContainer = styled.div`
    width: 400px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`

const Replay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover{
        cursor: pointer;
    }

`
const ReplayIcon = styled.img`
    width: 20px;
    height: 20px;
`

const ReplayText = styled.div`
    font-family: Roboto;
    font-weight: regular;
    font-size: 20px;
    color: #666666;
`

const BigDoor = styled.img`
    width: 120px;
    height: 230px;
`

const SmallDoor = styled.img`
    width: 80px;
    height: 150px;
`


const YourHomeYourRules = () => {
    const [animate, setAnimate] = useState(false);
    const restart = useAnimationControls();
    const enlarge1 = useAnimationControls();
    const enlarge2 = useAnimationControls();
    const enlarge3 = useAnimationControls();



    const handleRestart = async () => {
        // Reset animations
        restart.set("initial");
        enlarge1.set("initial");
        enlarge2.set("initial");
        enlarge3.set("initial");
    
        await restart.start("restart");
        await enlarge1.start("enlarge1");
        await enlarge1.start("initial");

    
        await enlarge2.start("enlarge2");
        await enlarge2.start("initial");
    
        await enlarge3.start("enlarge3");
        await enlarge3.start("initial");
      };

    return (
        <Container>
            <Left>
                <LeftWrapper>
                    <SmallItem
                        src={smallDoor}
                        variants={{
                            initial:{ x:0, y:0},
                            restart:{ x:-90, y:-40} 
                        }}
                        initial="initial"
                        animate={restart}
                        transition={{duration: 1.5}}
                        ><SmallDoor src={smallDoor}/></SmallItem>
                    <BigItem >
                        <BigDoor src={bigDoor}/>
                    </BigItem>       
                </LeftWrapper>
            </Left>
            <Right>
                <CardsContainer>
                    <CardWrapper>
                        <Text>When...</Text>
                        <Card
                            variants={{
                                initial:{scale: 1},
                                enlarge1:{scale: 1.06},
                            }}
                            initial="initial"
                            animate={enlarge1}
                            transition={{ duration: 1}}
                        >
                            <DoorCardDetails/>
                        </Card>
                    </CardWrapper>
                    <ArrowSection>
                        <Arrow/>
                    </ArrowSection>
                    <CardWrapper>
                        <Text>And...</Text>
                        <Card
                            variants={{
                                initial:{scale: 1},
                                enlarge1:{scale: 1.06},
                            }}
                            initial="initial"
                            animate={enlarge2}
                            transition={{duration: 1}}
                        >
                            <SunsetCardDetails/>
                        </Card>                    
                    </CardWrapper>
                    <ArrowSection>
                        <Arrow/>
                    </ArrowSection>
                    <CardWrapper>
                        <Text>Then...</Text>
                        <Card
                            variants={{
                                initial:{scale: 1},
                                enlarge1:{scale: 1.06},
                            }}
                            initial="initial"
                            animate={enlarge3}
                            transition={{duration: 1}}
                        >
                            <LampCardDetails/>
                        </Card>                    
                    </CardWrapper>
                </CardsContainer>
                <ReplayContainer>
                    <Replay onClick={handleRestart}>
                        <ReplayIcon src={replay}/>
                        <ReplayText> Replay</ReplayText>
                    </Replay>
                </ReplayContainer>
            </Right>
        </Container>

    )
}

export default YourHomeYourRules;