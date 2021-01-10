import styled from 'styled-components';
import FlexColumn from 'src/Components/Containers/FlexColumn';
import Margins from 'src/Styles/Margins';
import TextLine from 'src/Components/Texts/TextLine';
import { FontFamilies } from 'src/Styles/Fonts';
import SmallButton from 'src/Components/Buttons/SmallButton';
import React from 'react';
import FlexRow from 'src/Components/Containers/FlexRow';
import { formatAsMoney } from 'src/Utils/moneyUtils';
import TextLineInput from '../Inputs/TextLineInput';


const ButtonRow = styled(FlexRow)`
  justify-content: space-between;
  flex-wrap: nowrap;
`



// TODO: make this container be possibly white
// It is container for 1 investment type
const TileContainer = styled(FlexColumn)`
  background-color: #FFBDC9;
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
type Props = {
  onCompleteTransaction: (walletChange:number) => void 
}
type State = {
  balance: number;
  transactionAmount: number;
  transactionType: Transaction | null
};

enum Transaction {
  Deposit = "Deposit",
  Withdraw = "Withdraw"
}

export default class SavingsTile extends React.Component<Props, State>{
  state: State = {
    balance: 0,
    transactionAmount: 0,
    transactionType: null
  };
  
	render() {
		return (
      <TileContainer>
        <TileTitle>My Savings</TileTitle>
        <TextLine>Savings Balance: {formatAsMoney(this.state.balance)}</TextLine>
        <TextLine>Monthly Interest Rate: 10%</TextLine>
        <ButtonRow>
          <SmallButton onClick={this.onClickWithdraw} text="Withdraw" color="beige"></SmallButton>
          {
            this.state.transactionType && 
              <form onSubmit={this.onSubmitTransaction}>
                <TextLineInput onChange={this.onChangeTransactionAmount} type="text" name="name" />
              </form>
          }
          <SmallButton onClick={this.onClickDeposit} text="Deposit" color="beige"></SmallButton>
        </ButtonRow>
      </TileContainer>
		);
  }
  onClickDeposit = () => {
    this.setState({
      transactionType: Transaction.Deposit
    });
	};
  onClickWithdraw = () => {
    this.setState({
      transactionType: Transaction.Withdraw
    });
  };
  onChangeTransactionAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      transactionAmount: parseFloat(e.target.value),
    })
  }

  onSubmitTransaction = () => {
    this.setState({
      balance: this.state.transactionType === Transaction.Deposit 
                ? this.state.balance + this.state.transactionAmount
                : this.state.balance - this.state.transactionAmount,
      transactionAmount: 0,
      transactionType: null
    });
    this.props.onCompleteTransaction(
      this.state.transactionType === Transaction.Deposit 
      ? -this.state.transactionAmount
      : this.state.transactionAmount,
    )
  }
}




// const SavingsTile = () => (
//   <TileContainer>
//     <TileTitle>My Savings</TileTitle>
//     <TextLine>Savings Balance: $200.00</TextLine>
//     <TextLine>Monthly Interest Rate: 10%</TextLine>
//   </TileContainer>
// );

// export default SavingsTile;