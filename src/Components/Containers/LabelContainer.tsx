import Margins from 'src/Styles/Margins';
import styled from 'styled-components';
import FlexRow from './FlexRow';

const LabelContainer = styled(FlexRow)<{ color: string }>`
	height: 55px;
	border-radius: 15px;
	background-color: ${props => props.color};
	flex-grow: 0;
	justify-content: space-between;
	padding: ${Margins.Large}px ${Margins.XLarge}px;
`;

export default LabelContainer;