import React from 'react';
import BedroomButton from 'src/Components/Buttons/BedroomButton';
import PortfolioButton from 'src/Components/Buttons/PortfolioButton';
import FlexColumn from 'src/Components/Containers/FlexColumn';
import FlexRow from 'src/Components/Containers/FlexRow';
import PortfolioSummary from 'src/Components/Portfolio/PortfolioSummary';
import BedroomScene from 'src/Components/Scenes/BedroomScene';
import PortfolioScene from 'src/Components/Scenes/PortfolioScene';
import Portfolio from 'src/Models/Portfolio';
import Colors from 'src/Styles/Colors';
import Margins from 'src/Styles/Margins';
import styled from 'styled-components';
import window from 'src/Assets/Images/window.svg';
import workButton from 'src/Assets/Images/workButton.svg';
import disabledWork from 'src/Assets/Images/DisabledWork.svg';
import disabledShop from 'src/Assets/Images/DisabledShop.svg';
import shopButton from 'src/Assets/Images/shopButton.svg';
import BaseButton from 'src/Components/Buttons/BaseButton';
import TextLine from 'src/Components/Texts/TextLine';

enum Scene {
	Bedroom = 'Bedroom',
	Portfolio = 'Portfolio',
};

type State = {
	portfolio: Portfolio;
  activeScene: Scene | null;
  workButtonDisabled: boolean;
  shopButtonDisabled: boolean;
  roundNumber: number;
  imageNumber: number;
};

const SideBar = styled(FlexColumn)`
	flex-grow: 0;
  // background-color: ${Colors.Dark};
  background-color: #fff5ec;
	padding: ${Margins.Large}px;
`;

const Image = styled.img`
  padding: ${Margins.Medium}px;
  height: 75px;
`;

export default class MainPage extends React.Component<{}, State> {
	state: State = {
		portfolio: {
			items: [{
				name: 'Wallet',
				value: 1000,
			}],
		},
    activeScene: null,
    workButtonDisabled: false,
    shopButtonDisabled: false,
    roundNumber: 1,
    imageNumber: 1,
	};

	render() {
		return (
			<FlexRow>
				<SideBar>
          <img alt='' src={window} />
          <TextLine style={{position:'absolute', marginLeft: '95px', marginTop:'195px'}}>Month: {this.state.roundNumber}</TextLine>
          <br/>
					<BedroomButton onClick={() => this.setState({ activeScene: Scene.Bedroom })} />
          <br/>
					<PortfolioButton onClick={() => this.setState({ activeScene: Scene.Portfolio })} />
          <br/>
          <PortfolioSummary portfolio={this.state.portfolio}/>
          <FlexRow style={{height:'100px'}}>
            <div style={{height:'100px'}}>
            {this.state.workButtonDisabled 
              ? <Image alt='Go to work to earn money' src={disabledWork} />
              : <Image alt='Go to work to earn money' onClick={this.onClickWork} src={workButton} />}
            </div>

            <div>
            {this.state.portfolio.items[0].value < 200
              ? <Image alt='Buy some new bedroom decor' src={disabledShop} />
              : <Image alt='Buy some new bedroom decor' onClick={this.onClickShop}  src={shopButton} />}
            </div>
          </FlexRow>
          <BaseButton onClick={this.onClickNextRound} icon={null} color='pink' text="Next Month"/>
				</SideBar>
				<FlexColumn>
					{this.renderScene()}
				</FlexColumn>
			</FlexRow>
    );
	}

	renderScene = () => {
		switch (this.state.activeScene) {
			case null:
				return null;
			case Scene.Bedroom:
				return <BedroomScene imagenumber={this.state.imageNumber} />
			case Scene.Portfolio:
        return <PortfolioScene onCompleteTransaction={this.onCompleteTransaction}/>
		}
  };
  
  onCompleteTransaction = (walletChange: number) => {
    this.setState({
			portfolio: {
				...this.state.portfolio,
				items: this.state.portfolio.items.map(
					pi => pi.name === 'Wallet' ? { name: pi.name, value: pi.value + walletChange } : pi
				),
      },
    });
  }

	onClickWork = () => {
		this.setState({
			portfolio: {
				...this.state.portfolio,
				items: this.state.portfolio.items.map(
					pi => pi.name === 'Wallet' ? { name: pi.name, value: pi.value + 200 } : pi
				),
      },
      workButtonDisabled: true,
    });
	};

	onClickShop = () => {
    const newPIs = this.state.portfolio.items.slice();
    newPIs[0].value -= 200;

    this.setState({
			portfolio: {
				...this.state.portfolio,
				items: newPIs,
      },
      shopButtonDisabled: true,
      imageNumber: this.state.imageNumber + 1,
    });

  };
  
  onClickNextRound = () => {
    this.setState({
      roundNumber: this.state.roundNumber + 1,
      workButtonDisabled: false,
    });
	};
};