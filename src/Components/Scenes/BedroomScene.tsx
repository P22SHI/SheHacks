import styled from 'styled-components';
import FlexRow from 'src/Components/Containers/FlexRow';
import FlexColumn from 'src/Components/Containers/FlexColumn';
import EmptyRoom from 'src/Assets/Images/EmptyRoom.svg';
import Two from 'src/Assets/Images/step2.svg';
import Three from 'src/Assets/Images/step3.svg';
import Four from 'src/Assets/Images/step4.svg';
import Five from 'src/Assets/Images/step5.svg';
import Six from 'src/Assets/Images/step6.svg';
import Seven from 'src/Assets/Images/step7.svg';
import Eight from 'src/Assets/Images/step8.svg';
import Nine from 'src/Assets/Images/step9.svg';
import Ten from 'src/Assets/Images/step10.svg';
import Eleven from 'src/Assets/Images/step11.svg';
import Twelve from 'src/Assets/Images/step12.svg';
import Thirteen from 'src/Assets/Images/step13.svg';
import Fourteen from 'src/Assets/Images/step14.png';

type Props = {
	imagenumber: number,
};

const SceneContainer = styled(FlexRow)`
	background-color: #F5C9CA;
`;

const ImageContainer = styled(FlexColumn)`
  height: 100%;
  width: 100%;
`;

//This is a functional component
const BedroomScene = (props: Props) => {
  var imagepath = EmptyRoom;
  switch (props.imagenumber) {
    case 1: imagepath = EmptyRoom; break;
    case 2: imagepath = Two; break;
    case 3: imagepath = Three; break;
    case 4: imagepath = Four; break;
    case 5: imagepath = Five; break;
    case 6: imagepath = Six; break;
    case 7: imagepath = Seven; break;
    case 8: imagepath = Eight; break;
    case 9: imagepath = Nine; break;
    case 10: imagepath = Ten; break;
    case 11: imagepath = Eleven; break;
    case 12: imagepath = Twelve; break;
    case 13: imagepath = Thirteen; break;
    case 14: imagepath = Fourteen; break;
    default: imagepath = Fourteen; break;
  }

  return (
    <SceneContainer>
      <ImageContainer><img alt='The Bedroom' src={imagepath} /></ImageContainer>
    </SceneContainer>
  );
};

export default BedroomScene;