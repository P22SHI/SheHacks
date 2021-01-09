import React from 'react';
import MainPage from 'src/Pages/MainPage';
import styled from 'styled-components';
import FlexColumn from 'src/Components/Containers/FlexColumn';
import Colors from 'src/Styles/Colors';

const AppContainer = styled(FlexColumn)`
	background-color: ${Colors.Light};
	position: fixed;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
	overflow-y: auto;
`;

export default class App extends React.Component {
	render() {
		return (
			<AppContainer>
				<MainPage />
			</AppContainer>
		);
	}
}
