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

enum Scene {
	Bedroom = 'Bedroom',
	Portfolio = 'Portfolio',
};

type State = {
	portfolio: Portfolio;
	activeScene: Scene | null;
};

const SideBar = styled(FlexColumn)`
	flex-grow: 0;
	/* background-color: ${Colors.Dark}; */
	padding: ${Margins.Large}px;
`;

export default class MainPage extends React.Component<{}, State> {
	state: State = {
		portfolio: {
			items: [{
				name: 'Cash',
				value: 10000,
			}],
		},
		activeScene: null,
	};

	render() {
		return (
			<FlexRow>
				<SideBar>
					<PortfolioSummary portfolio={this.state.portfolio}/>
					<BedroomButton onClick={() => this.setState({ activeScene: Scene.Bedroom })} />
					<PortfolioButton onClick={() => this.setState({ activeScene: Scene.Portfolio })} />
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
				return <BedroomScene />
			case Scene.Portfolio:
				return <PortfolioScene />
		}
	}
};