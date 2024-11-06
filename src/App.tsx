import './App.css';
import styled, { css } from 'styled-components';

import mainImg from './img/mainImg.jpeg';


function App() {
    return (
        <StyledWrapper>
            <StyledCard>
                <StyledImage/>
                    <StyledDiv>
                        <StyledTitlle>Headline</StyledTitlle>
                        <StyledText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledText>
                    </StyledDiv>
                    <StyledDivForBtn>
                        <StyledBtn bgcolor={'rgb(78, 113, 254)'} main>See more</StyledBtn>
                        <StyledBtn textColor={'rgb(78, 113, 254)'} plain>Save</StyledBtn>
                    </StyledDivForBtn>
            </StyledCard>

            <StyledCard>
                <StyledImage/>
                    <StyledDiv>
                        <StyledTitlle>Headline</StyledTitlle>
                        <StyledText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledText>
                    </StyledDiv>
                    <StyledDivForBtn>
                        <StyledBtn bgcolor={'rgb(78, 113, 254)'} main>See more</StyledBtn>
                        <StyledBtn textColor={'rgb(78, 113, 254)'} plain>Save</StyledBtn>
                    </StyledDivForBtn>
            </StyledCard>

            <StyledCard>
                <StyledImage/>
                    <StyledDiv>
                        <StyledTitlle>Headline</StyledTitlle>
                        <StyledText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledText>
                    </StyledDiv>
                    <StyledDivForBtn>
                        <StyledBtn bgcolor={'rgb(78, 113, 254)'} main>See more</StyledBtn>
                        <StyledBtn textColor={'rgb(78, 113, 254)'} plain>Save</StyledBtn>
                    </StyledDivForBtn>
            </StyledCard>

            <StyledCard>
                <StyledImage/>
                    <StyledDiv>
                        <StyledTitlle>Headline</StyledTitlle>
                        <StyledText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledText>
                    </StyledDiv>
                    <StyledDivForBtn>
                        <StyledBtn bgcolor={'rgb(78, 113, 254)'} main>See more</StyledBtn>
                        <StyledBtn textColor={'rgb(78, 113, 254)'} plain>Save</StyledBtn>
                    </StyledDivForBtn>
            </StyledCard>
        </StyledWrapper>
    );
}

export default App;

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`

const StyledCard = styled.div`
    width: 300px;
    min-height: 350px;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
    background: rgb(255, 255, 255);
`

const StyledDiv = styled.div`
    padding: 0 10px;
    margin-bottom: 20px;
`

const StyledImage = styled.img`
    display: block;
    width: 100%;
    height: 170px;
    background-image: url("${mainImg}");
    margin-bottom: 20px;
    border-radius: 10px;
`

const StyledTitlle = styled.h2`
    font-size: 19px;
    font-weight: 700;
    line-height: 19px;
    color: rgb(0, 0, 0);
    text-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 20px;
    
`

const StyledText = styled.p`
    color: rgb(171, 179, 186);    
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0%;
`

const StyledDivForBtn = styled.div`
    display: flex;
    padding: 0 10px;
    gap: 12px;
`

type StyledBtnPropsType = {
    textColor?: string
    bgcolor?: string
    main?: boolean
    plain?: boolean
}

const StyledBtn = styled.button<StyledBtnPropsType>`
    color:  ${props => props.textColor || 'rgb(255, 255, 255)'} ;
    font-family: Inter;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0%;
    height: 30px;
    min-width: 86px;
    background-color: ${props => props.bgcolor || 'rgb(255, 255, 255)'};
    border-radius: 5px;
    border: 2px solid rgb(78, 113, 254);
    cursor: pointer;


${props => props.bgcolor && css<StyledBtnPropsType>`
    &:hover{    
        background-color: rgb(255, 255, 255);
        color: rgb(78, 113, 254);
        transition: all 0.2s;
    }
`}

${props => props.textColor && css<StyledBtnPropsType>`
    &:hover{    
        background-color: rgb(78, 113, 254);
        color: rgb(255, 255, 255);
        transition: all 0.2s;
    }
`}
`