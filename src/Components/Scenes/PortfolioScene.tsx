import styled from 'styled-components';
import FlexRow from 'src/Components/Containers/FlexRow';
import FlexColumn from 'src/Components/Containers/FlexColumn';
import StocksTile from 'src/Components/Tiles/StocksTile';
import SavingsTile from 'src/Components/Tiles/SavingsTile';
import BondsTile from 'src/Components/Tiles/BondsTile';

const SceneContainer = styled(FlexColumn)`
	background-color: #FFFFFF;
`;

type Props = {
  onCompleteTransaction: (walletChange:number) => void 
}

const PortfolioScene = (props: Props) => (
	<SceneContainer>
    <FlexRow>
      <SavingsTile onCompleteTransaction={props.onCompleteTransaction}/>
      <BondsTile/> 
      {/* <BondsTile onCompleteTransaction={props.onCompleteTransaction}/>  */}
    </FlexRow>
    {/* <StocksTile onCompleteTransaction={props.onCompleteTransaction}/> */}
    <StocksTile/>
	</SceneContainer>
);

export default PortfolioScene;