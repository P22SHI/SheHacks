import React from 'react';
import Portfolio from 'src/Models/Portfolio';
import FlexColumn from 'src/Components/Containers/FlexColumn';
import FlexRow from 'src/Components/Containers/FlexRow';
import TextLine from 'src/Components/Texts/TextLine';
import styled from 'styled-components';
import { formatAsMoney } from 'src/Utils/moneyUtils';
import Margins from 'src/Styles/Margins';
import { FontSizes } from 'src/Styles/Fonts';
import Colors from 'src/Styles/Colors';

type Props = {
	portfolio: Portfolio;
};

const Container = styled(FlexColumn)`
	flex-grow: 0;
`;

const Header = styled(TextLine)`
	font-size: ${FontSizes.SmallHeader}px;
	color: ${Colors.TextLight};
`;

const LabelColumn = styled(FlexColumn)`
	margin-right: ${Margins.Medium}px;
`;

const PortfolioSummary = (props: Props) => (
	<Container>
		<Header>Your Portfolio</Header>
		<FlexRow>
			<LabelColumn>
				{props.portfolio.items.map(pi => <TextLine>{pi.name}:</TextLine>)}
			</LabelColumn>
			<FlexColumn>
				{props.portfolio.items.map(pi => <TextLine>{formatAsMoney(pi.value)}</TextLine>)}
			</FlexColumn>
		</FlexRow>
	</Container>
);

export default PortfolioSummary;