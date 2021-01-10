import styled from 'styled-components';
import FlexColumn from 'src/Components/Containers/FlexColumn';
import Margins from 'src/Styles/Margins';
import TextLine from 'src/Components/Texts/TextLine';
import { FontFamilies } from 'src/Styles/Fonts';

// TODO: make this container be possibly white
// It is container for 1 investment type
const TileContainer = styled(FlexColumn)`
  background-color: #FFE2A9;
  justify-content: space-between;
  padding: ${Margins.Large}px ${Margins.XLarge}px;
  margin: 20px;
  margin-bottom: 0px;
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

const BondsTile = () => (
  <TileContainer>
    <TileTitle>My Bonds</TileTitle>
    <OneInvestment>
      <TextLine>Bond A</TextLine>
      <TextLine>This bond can be redeemed in 4 months.</TextLine>
    </OneInvestment>
    <OneInvestment>
      <TextLine>Bond B</TextLine>
      <TextLine>This bond can be redeemed now! Click redeem.</TextLine>
    </OneInvestment>
  </TileContainer>
);

export default BondsTile;