import styled from 'styled-components';
import FlexRow from 'src/Components/Containers/FlexRow';
import FlexColumn from 'src/Components/Containers/FlexColumn';
import Margins from 'src/Styles/Margins';
import TextLine from 'src/Components/Texts/TextLine';
import { FontFamilies } from 'src/Styles/Fonts';
import StockOne from 'src/Assets/Images/stock1small.png';
import StockTwo from 'src/Assets/Images/stock2small.png';
import StockThree from 'src/Assets/Images/stock3small.png';

const ImageContainer = styled(FlexColumn)`
  display: inline;
`;


// TODO: make this container be possibly white
// It is container for 1 investment type
const TileContainer = styled(FlexColumn)`
  background-color: #FEF0D5;
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
  margin-left: 20px;
`;

const StocksTile = () => (
  <TileContainer>
    <TileTitle>My Stocks</TileTitle>
    <FlexRow>
      <OneInvestment>
        <TextLine>Stock A</TextLine>
        <ImageContainer><img  style={{width:'300px'}} alt='' src={StockOne} /></ImageContainer>
        <TextLine>Current price: $23.00</TextLine>
      </OneInvestment>
      <OneInvestment>
        <TextLine>Stock B</TextLine>
        <ImageContainer><img  style={{width:'300px'}} alt='' src={StockTwo} /></ImageContainer>
        <TextLine>Current price: $23.00</TextLine>
      </OneInvestment>
      <OneInvestment>
        <TextLine>Stock C</TextLine>
        <ImageContainer><img  style={{width:'300px'}} alt='' src={StockThree} /></ImageContainer>
        <TextLine>Current price: $23.00</TextLine>
      </OneInvestment>
    </FlexRow>
  </TileContainer>
);

export default StocksTile;