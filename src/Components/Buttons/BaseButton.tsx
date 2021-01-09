import styled from 'styled-components';
import FlexRow from 'src/Components/Containers/FlexRow';
import Margins from 'src/Styles/Margins';
import TextLine from 'src/Components/Texts/TextLine';
import { FontFamilies } from 'src/Styles/Fonts';
import RightCircleArrow from 'src/Assets/Images/RightCircleArrow.svg';

type Props = {
	icon: React.ReactNode,
	text: string,
	color: string;
	onClick: () => void,
};

const ButtonContainer = styled(FlexRow)<{ color: string }>`
	width: 378px;
	height: 77px;
	border-radius: 15px;
	background-color: ${props => props.color};
	flex-grow: 0;
	justify-content: space-between;
	padding: ${Margins.Large}px ${Margins.XLarge}px;

`;

const ButtonText = styled(TextLine)`
	font-size: 40px;
	font-family: ${FontFamilies.Itim};
	user-select: none;
	text-align: center;
	line-height: .95em;
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