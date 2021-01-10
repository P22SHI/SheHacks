import React from 'react';
import Portfolio from 'src/Models/Portfolio';
import FlexColumn from 'src/Components/Containers/FlexColumn';
import TextLine from 'src/Components/Texts/TextLine';
import styled from 'styled-components';
import { formatAsMoney } from 'src/Utils/moneyUtils';
import { FontSizes } from 'src/Styles/Fonts';
import LabelContainer from '../Containers/LabelContainer';

type Props = {
	portfolio: Portfolio;
};

const Container = styled(FlexColumn)`
	flex-grow: 0;
`;

const Header = styled(TextLine)`
  font-size: ${FontSizes.SmallHeader}px;
`;

const DollarContainer = styled(LabelContainer)`
	box-shadow: 0px 4px 4px 0px #00000040 inset;
`;

const DollarAmount = styled(TextLine)`
	text-align: right;
`;

const PortfolioSummary = (props: Props) => (
	<Container>
		{[...props.portfolio.items, props.portfolio.items.reduce(
			(total, pi) => ({ ...total, value: total.value + pi.value }),
			{ name: 'Total Net Worth', value: 0 },
		)].map(pi => (
			<>
				<Header>{pi.name}:</Header>
				<DollarContainer color='#ffe2a9'>
					<DollarAmount>{formatAsMoney(pi.value)}</DollarAmount>
				</DollarContainer>
			</>
		))}
	</Container>
);

export default PortfolioSummary;