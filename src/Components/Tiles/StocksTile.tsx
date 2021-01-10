import styled from 'styled-components';
import FlexColumn from 'src/Components/Containers/FlexColumn';
import Margins from 'src/Styles/Margins';
import TextLine from 'src/Components/Texts/TextLine';
import { FontFamilies } from 'src/Styles/Fonts';
import StockImage from 'src/Assets/Images/stock-line-graph.png';

const ImageContainer = styled(FlexColumn)`
  display: inline;
`;


// TODO: make this container be possibly white
// It is container for 1 investment type
const TileContainer = styled(FlexColumn)`
  background-color: #A7D2CB;
  justify-content: space-between;
  padding: ${Margins.Large}px ${Margins.XLarge}px;
  margin: 20px;
  border-radius: 15px;
`;

// TODO: adjust this CSS to fit style of 'MY STOCKS' in Figma
const TileTitle = styled(TextLine)`
  font-size: 40px;
  font-family: ${FontFamilies.Itim};
  user-select: none;
  text-align: center;
  line-height: .95em; 
`;

const OneInvestment = styled(FlexColumn)`
  margin: 20px;
`;

const StocksTile = () => (
  <TileContainer>
    <TileTitle>My Stocks</TileTitle>
    <OneInvestment>
      <TextLine>Stock A</TextLine>
      <ImageContainer><img  alt='' src={StockImage} /></ImageContainer>
      <TextLine>Current price: $23.00</TextLine>
    </OneInvestment>
  </TileContainer>
);

export default StocksTile;