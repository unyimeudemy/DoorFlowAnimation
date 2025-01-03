import { useAnimationControls, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Arrow from "./Arrow";
import DoorCardDetails from "./DoorCardDetails";
import SunsetCardDetails from "./SunsetCardDetails";
import LampCardDetails from "./LampCardDetails";
import replay from "../images/replay.svg"
import bigDoor from "../images/door-big.svg"
import smallDoor from "../images/door-small.svg"
import patchOn from "../images/patch-on.png"
import patchOff from "../images/patch-off.png"




// const Container = styled.div`
//     width: 500px;
//     height: 600px;
//     display: flex;
//     background: red;

// `

const Container = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
`



// const Left = styled.div`
//     width: 240px;
//     height: 800px;
// `

const Left = styled.div`
    width: 170px;
    height: 500px;
`

// const Right = styled.div`
//     width: 430px;
//     height: 800px;
//     margin-left: 50px;
//     z-index: 4;
// `

const Right = styled.div`
    width: 300px;
    height: 550px;
    margin-left: 25px;
    z-index: 4;
    display: flex;
    flex-direction: column;
`

// const SmallItem = styled(motion.div)`
//     width: 50px;
//     height: 100px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     margin-top: -22px;
//     margin-left: -30px;
//     z-index: 2;
// `

const SmallItem = styled(motion.div)`
    width: 35px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: -22px;
    margin-left: -30px;
    z-index: 2;
`

// const BigItem = styled.div`
//     width: 100px;
//     height: 150px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     z-index: 4;

// `

const BigItem = styled.div`
    width: 70px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;

`

// const LeftWrapper = styled.div`
//     display: flex;
//     margin-top: 53px;
//     margin-left: 150px;
// `

const LeftWrapper = styled.div`
 
    display: flex;
    margin-top: 35px;
    margin-left: 100px;
`

// const CardsContainer = styled.div`
//     width: 400px;
//     height: 650px;
// `

const CardsContainer = styled.div`
    width: 300px;
    height: 550px;
`

// const CardWrapper = styled.div`
//     width: 400px;
//     height: 120px;
// `

const CardWrapper = styled.div`
    width: 200px;
    height: 60px;
`

// const ArrowSection = styled.div`
//     width: 400px;
//     height: 125px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-top: 15px;
// `

const ArrowSection = styled.div`
    width: 300px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`

// const Text = styled.div`
//     font-family: Roboto;
//     font-weight: bold;
//     font-size: 23px;
//     color: #333333;
//     margin-bottom: 15px;
// `

const Text = styled.div`
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    color: #333333;
    margin-bottom: 7.5px;
`




// const Card = styled(motion.div)`
//     width: 400px;
//     height: 80px;
//     background: #FFFFFF;
//     margin-top: 5px;
//     border-radius: 12px;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.06);

// `

const Card = styled(motion.div)`
    width: 300px;
    height: 60px;
    background: #FFFFFF;
    margin-top: 2.5px;
    border-radius: 6px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;

`

// const ReplayContainer = styled.div`
//     width: 400px;
//     height: 60px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-top: 30px;
// `

const ReplayContainer = styled.div`
    width: 300px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

// const Replay = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 8px;

//     &:hover{
//         cursor: pointer;
//     }

// `

const Replay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    &:hover{
        cursor: pointer;
    }

`

// const ReplayIcon = styled.img`
//     width: 20px;
//     height: 20px;
// `

const ReplayIcon = styled.img`
    width: 20px;
    height: 20px;
`

// const ReplayText = styled.div`
//     font-family: Roboto;
//     font-weight: regular;
//     font-size: 20px;
//     color: #666666;
// `

const ReplayText = styled.div`
    font-family: Roboto;
    font-weight: regular;
    font-size: 15px;
    color: #666666;
`

// const BigDoor = styled.img`
//     width: 120px;
//     height: 230px;
// `

const BigDoor = styled.img`
    width: 100px;
    height: 140px;
`

// const SmallDoor = styled.img`
//     width: 80px;
//     height: 150px;
// `

const SmallDoor = styled.img`
    width: 60px;
    height: 100px;
`

// const Patch = styled.img`
//     width: 20px;
//     height: 20px;
//     position: absolute;
//     z-index: 5;
//     top: 220px;
//     right: 1115px;

// `

const Patch = styled.img`
    width: 10px;
    height: 10px;
    position: absolute;
    z-index: 5;
    top: 205px;
    right: 841px;

`


const YourHomeYourRules = ({setLampState}) => {
    const [showCheckIcon_1, setShowCheckIcon_1] = useState(false);
    const [showCheckIcon_2, setShowCheckIcon_2] = useState(false);
    const [showReplay, setShowReplay] = useState(true);
    const [patchState, setPatchState] = useState(false)


    const smallDoorSide = useAnimationControls();
    const enlarge1 = useAnimationControls();
    const enlarge2 = useAnimationControls();
    const enlarge3 = useAnimationControls();
    const animateArrow_1 = useAnimationControls();
    const animateArrow_2 = useAnimationControls();




    const handleAnimate = async () => {
        // reset all animation to initial state
        setShowReplay(false)
        smallDoorSide.set("initial");
        enlarge1.set("initial");
        enlarge2.set("initial");
        enlarge3.set("initial");
        animateArrow_1.set("initial")
        animateArrow_2.set("initial")
        setShowCheckIcon_1(false)
        setShowCheckIcon_2(false)
        setLampState(false);
        setPatchState(false)

        await smallDoorSide.start("smallDoorSide");
        setPatchState(true)

        await enlarge1.start("enlarge1");
        await enlarge1.start("initial");

        await animateArrow_1.start("animate")

        await enlarge2.start("enlarge2");
        setShowCheckIcon_1(true)
        await enlarge2.start("initial");

        await animateArrow_2.start("animate")
    
        // setLampState(true);
        setTimeout(() => {
            setLampState(true);
          }, 500);
        await enlarge3.start("enlarge3");
        setShowCheckIcon_2(true)
        await enlarge3.start("initial");

        setShowReplay(true)
      };

      useEffect(() => {
        handleAnimate();
    }, []);

    return (
        <Container>
            <Left>
                <LeftWrapper>
                    <SmallItem
                        src={smallDoor}
                        variants={{
                            initial:{ x:0, y:0},
                            smallDoorSide:{ x:-67, y:-14} 
                        }}
                        initial="initial"
                        animate={smallDoorSide}
                        transition={{duration: 1.5}}
                        ><SmallDoor src={smallDoor}/></SmallItem>
                    <BigItem >
                        {patchState ? <Patch src={patchOn}/> : <Patch src={patchOff}/> }  
                        {/* <Patch /> */}
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
                            transition={{ 
                                duration: 0.8,
                            }}
                        >
                            <DoorCardDetails/>
                        </Card>
                    </CardWrapper>
                    <ArrowSection>
                        <Arrow animateArrow={animateArrow_1}/>
                    </ArrowSection>
                    <CardWrapper>
                        <Text>And...</Text>
                        <Card
                            variants={{
                                initial:{scale: 1},
                                enlarge2:{scale: 1.06},
                            }}
                            initial="initial"
                            animate={enlarge2}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <SunsetCardDetails showCheckIcon_1={showCheckIcon_1}/>
                        </Card>                    
                    </CardWrapper>
                    <ArrowSection>
                        <Arrow animateArrow={animateArrow_2}/>
                    </ArrowSection>
                    <CardWrapper>
                        <Text>Then...</Text>
                        <Card
                            variants={{
                                initial:{scale: 1},
                                enlarge3:{scale: 1.06},
                            }}
                            initial="initial"
                            animate={enlarge3}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <LampCardDetails showCheckIcon_2={showCheckIcon_2}/>
                        </Card>                    
                    </CardWrapper>
                </CardsContainer>
                {showReplay && <ReplayContainer>
                    <Replay onClick={handleAnimate}>
                        <ReplayIcon src={replay}/>
                        <ReplayText> Replay</ReplayText>
                    </Replay>
                </ReplayContainer>}
            </Right>
        </Container>

    )
}

export default YourHomeYourRules;