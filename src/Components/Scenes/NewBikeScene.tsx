import styled from 'styled-components';
import FlexRow from 'src/Components/Containers/FlexRow';
import FlexColumn from 'src/Components/Containers/FlexColumn';
// import EmptyRoom from 'src/Assets/Images/EmptyRoom.svg';
import React from 'react';
import TextLine from '../Texts/TextLine';
import Colors from 'src/Styles/Colors';
import * as Feather from 'react-feather';
// import BaseButton from '../Buttons/BaseButton';
// import LabelContainer from '../Containers/LabelContainer';


const SceneContainer = styled(FlexRow)`
  background-color: #f9cfcf;
  padding: 0;
`;

const ImageContainer = styled(FlexColumn)`
  height: 100%;
  width: 100%;
`;

//This is a functional component
const NewBikeScene = () => {
  return (
    <SceneContainer>
      <div style={{backgroundColor: '#fff5ec', border: '5px solid #9a795a', borderRadius: '25px', padding: '30px', position:"absolute", width: '600px', textAlign:'center', marginLeft: '220px', marginTop: '250px'}}>
        <TextLine style={{fontSize: '32px'}}>New Bike!</TextLine>
        <p>You decided to buy a new bike since you have grown out of your old one.</p>
        <FlexRow><TextLine>Cost: $300.00</TextLine></FlexRow>
        {/* <FlexRow>
          <LabelContainer>Pay with wallet</LabelContainer>
          <LabelContainer>Get funds from Investment Portfolio</LabelContainer>
        </FlexRow> */}
        {/* <BaseButton onClick={this.onClickNextMonth} icon={null} color='#FFBDC9' text="Next Month"/> */}
      </div>
      <div style={{position:'absolute', marginLeft:'1000px', marginTop:'50px'}}><Feather.XCircle color={Colors.TextDark} size={50} /></div>
    </SceneContainer>
  );
};

export default NewBikeScene;