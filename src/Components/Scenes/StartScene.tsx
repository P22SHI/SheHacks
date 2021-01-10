import styled from 'styled-components';
import FlexRow from 'src/Components/Containers/FlexRow';
import FlexColumn from 'src/Components/Containers/FlexColumn';
import EmptyRoom from 'src/Assets/Images/EmptyRoom.svg';
import React from 'react';
import TextLine from '../Texts/TextLine';
import BrownArrow from 'src/Assets/Images/brownArrow.svg'

const SceneContainer = styled(FlexRow)`
  background-color: #F5C9CA;
  padding: 0;
`;

const ImageContainer = styled(FlexColumn)`
  height: 100%;
  width: 100%;
`;

//This is a functional component
const StartScene = () => {
  return (
    <SceneContainer>
      <ImageContainer><img alt='Empty Bedroom' src={EmptyRoom} /></ImageContainer>
      <div style={{backgroundColor: '#fff5ec', border: '5px solid #9a795a', borderRadius: '25px', padding: '30px', position:"absolute", width: '600px', textAlign:'center', marginLeft: '220px', marginTop: '250px'}}>
        <TextLine style={{fontSize: '32px'}}>Welcome to BedroomBucks!</TextLine>
        <p>You have been longing to give your bedroom a makeover for ages.</p>
        <p>Now is your chance!</p>
        <p>But before you get to it, you need to first save up enough money for your room decorations. The more you save up, the cooler the decors you can get!</p>
        <FlexRow><TextLine>Click on My Portfolio and let's get started!</TextLine></FlexRow>
        {/* <BaseButton onClick={this.onClickNextMonth} icon={null} color='#FFBDC9' text="Next Month"/> */}
      </div>
    </SceneContainer>
  );
};

export default StartScene;