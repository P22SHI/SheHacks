import styled from 'styled-components';
import TextLine from 'src/Components/Texts/TextLine';
import { FontFamilies } from 'src/Styles/Fonts';
import Margins from 'src/Styles/Margins';
import FlexRow from '../Containers/FlexRow';

type Props = {
	// icon: React.ReactNode,
	text: string,
	color: string;
	onClick: () => void,
};

const SmallButtonContainer = styled(FlexRow)<{ color: string }>`
	height: 35px;
	border-radius: 5px;
	background-color: ${props => props.color};
	flex-grow: 0;
	justify-content: space-between;
	padding: ${Margins.Small}px ${Margins.Small}px;
`;

const ButtonText = styled(TextLine)`
  font-size: 12px;
  font-family: ${FontFamilies.Itim};
	user-select: none;
	text-align: center;
`;

const SmallButton = (props: Props) => (
	<SmallButtonContainer
		onClick={props.onClick}
		color={props.color}
	>
		<ButtonText>{props.text}</ButtonText>
	</SmallButtonContainer>
);

export default SmallButton;