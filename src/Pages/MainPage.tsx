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
import StartScene from 'src/Components/Scenes/StartScene';
import NewBikeScene from 'src/Components/Scenes/NewBikeScene';

enum Scene {
	Bedroom = 'Bedroom',
  Portfolio = 'Portfolio',
  NewBike = 'NewBike'
};

type State = {
	portfolio: Portfolio;
  activeScene: Scene | null;
  workButtonDisabled: boolean;
  shopButtonDisabled: boolean;
  monthNumber: number;
  imageNumber: number;
};

const ButtonsRow = styled(FlexRow)`
  justify-content: space-around;
  flex-wrap: nowrap;
`

const ButtonRow = styled(FlexRow)`
  justify-content: center;
  flex-wrap: nowrap;
`

const SideBar = styled(FlexColumn)`
	flex-grow: 0;
  background-color: ${Colors.Beige};
	padding: ${Margins.Large}px;
`;

const Image = styled.img`
  padding: ${Margins.Medium}px;
  height: 130px;
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
    monthNumber: 1,
    imageNumber: 1,
	};

	render() {
		return (
			<FlexRow>
				<SideBar>
          <img alt='' src={window} />
          <TextLine style={{position:'absolute', marginLeft: '95px', marginTop:'195px'}}>Month: {this.state.monthNumber}</TextLine>
          <br/>
					<BedroomButton onClick={() => this.setState({ activeScene: Scene.Bedroom })} />
          <br/>
					<PortfolioButton onClick={() => this.setState({ activeScene: Scene.Portfolio })} />
          <br/>
          <PortfolioSummary portfolio={this.state.portfolio}/>
          <ButtonsRow >
            {this.state.workButtonDisabled 
              ? <Image alt='Go to work to earn money' src={disabledWork} />
              : <Image alt='Go to work to earn money' onClick={this.onClickWork} src={workButton} />}

            {this.state.portfolio.items[0].value < 200
              ? <Image alt='Buy some new bedroom decor' src={disabledShop} />
              : <Image alt='Buy some new bedroom decor' onClick={this.onClickShop}  src={shopButton} />}
          </ButtonsRow>
          <hr></hr>
          <ButtonRow>
            <BaseButton onClick={this.onClickNextMonth} icon={null} color='#FFBDC9' text="Next Month"/>     
          </ButtonRow>
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
        return <StartScene/>;
			case Scene.Bedroom:
				return <BedroomScene imagenumber={this.state.imageNumber} />
			case Scene.Portfolio:
        return <PortfolioScene onCompleteTransaction={this.onCompleteTransaction}/>
        case Scene.NewBike:
        return <NewBikeScene/>
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
  
  onClickNextMonth = () => {
    this.setState({
      monthNumber: this.state.monthNumber + 1,
      workButtonDisabled: false,
      activeScene: this.state.monthNumber === 2 ? Scene.NewBike: this.state.activeScene,
    });
	};
};