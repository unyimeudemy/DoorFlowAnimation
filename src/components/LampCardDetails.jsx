
import styled from "styled-components";
import bulb from "../images/bulb.svg"
import checkIcon from "../images/check-circle.svg"





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
    background: #FFA000;
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
    width: 240px;
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

const IconContainer = styled.div`
    width: 60px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
`



const IconWrapper = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
// background: #4CAF50;


const Icon = styled.img`
    width: 25px;
    height: 25px;
filter: invert(55%) sepia(85%) saturate(300%) hue-rotate(90deg) brightness(120%) contrast(100%);
`



const LampCardDetails = () => {

    return(
        <Container>
            <LogoContainer>
                <LogoWrapper>
                    <Logo src={bulb}/>
                </LogoWrapper>
            </LogoContainer>

            <Text>
                <Device>Philips Hue Light</Device>
                <Action>Turn on</Action>

            </Text>
            <IconContainer>
                <IconWrapper>
                    <Icon src={checkIcon}/>
                </IconWrapper>
            </IconContainer>
       </Container>
    )

}

export default LampCardDetails;