import styled from 'styled-components';
import TextLine from 'src/Components/Texts/TextLine';
import { FontFamilies } from 'src/Styles/Fonts';
import RightCircleArrow from 'src/Assets/Images/RightCircleArrow.svg';
import LabelContainer from '../Containers/LabelContainer';
import Margins from 'src/Styles/Margins';

type Props = {
	icon: React.ReactNode,
	text: string,
	color: string;
	onClick: () => void,
};

const ButtonContainer = styled(LabelContainer)`
	box-shadow: 0px 4px 4px 0px #00000040;
`;

const ButtonText = styled(TextLine)`
  font-size: 28px;
  font-family: ${FontFamilies.Itim};
	user-select: none;
	text-align: center;
	line-height: .75em;
	margin-left: ${Margins.Medium}px;
`;

const BaseButton = (props: Props) => (
	<ButtonContainer
		onClick={props.onClick}
		color={props.color}
	>
		{props.icon}
		<ButtonText>{props.text}</ButtonText>
		<img alt='' src={RightCircleArrow} />
	</ButtonContainer>
);

export default BaseButton;