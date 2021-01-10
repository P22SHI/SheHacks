import styled from 'styled-components';
import Colors from 'src/Styles/Colors';
import { FontFamilies, FontSizes } from 'src/Styles/Fonts';

const TextLine = styled.span`
  // font-family: ${FontFamilies.Default};
  font-family: ${FontFamilies.Itim};
	font-size: ${FontSizes.Default}px;
	font-weight: 600;
  color: ${Colors.TextDark};
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
	flex-basis: 0px;
	flex-grow: 1;
	flex-shrink: 1;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export default TextLine;