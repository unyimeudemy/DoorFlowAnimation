import styled from "styled-components";
import doorSensor from "../images/door-window-sensor.svg"



const Container = styled.div`
    display: flex;
    width: 400px;
    height: 80px;
    padding: 5px;

`

const LogoContainer = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const LogoWrapper = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: #135ea0;
    display: flex;
    align-items: center;
    justify-content: center;


`

const Logo = styled.img`
    width: 35px;
    height: 35px;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(100%);
`

const Text = styled.div`
    width: 260px;
    height: 70px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    padding: 5px;
`

const Device = styled.div`
    font-family: Roboto;
    font-weight: regular;
    font-size: 15px;
    color: #666666;
    margin-top: 5px;


`

const Action = styled.div`
    font-family: Roboto;
    font-weight: medium;
    font-size: 22px;
    color: #000000;
    margin-top: 5px;

`





const DoorCardDetails = () => {

    return(
        <Container>
            <LogoContainer>
                <LogoWrapper>
                    <Logo src={doorSensor}/>
                </LogoWrapper>
            </LogoContainer>

            <Text>
                <Device>Xiaomi Door Sensor</Device>
                <Action>The door opens</Action>
            </Text>
        </Container>
    )

}

export default DoorCardDetails;