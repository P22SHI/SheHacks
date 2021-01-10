import styled from 'styled-components';
import Borders from 'src/Styles/Borders';
import Colors from 'src/Styles/Colors';
import { FontFamilies, FontSizes } from 'src/Styles/Fonts';

const TextLineInput = styled.input`
font-family: ${FontFamilies.Itim};
	font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: ${Colors.TextDark};
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
	caret-color: ${Colors.TextDark};
  min-width: 0px;
  width: 220px;
	flex-basis: 0px;
	flex-grow: 1;
	flex-shrink: 1;
	background-color: transparent;
	border: none;
	border-bottom: ${Borders.Thin}px solid ${Colors.TextDark};
	padding: 0px;

	&::placeholder {
		color: ${Colors.TextPlaceholder};
		flex-basis: 0px;
	}

	&:focus {
		outline: none;
	}
`;

export default TextLineInput;