import * as Feather from 'react-feather';
import BaseButton from 'src/Components/Buttons/BaseButton';
import Colors from 'src/Styles/Colors';

type Props = {
	onClick: () => void,
};

const PortfolioButton = (props: Props) => (
	<BaseButton
		icon={<Feather.Briefcase color={Colors.Icon} size={40} />}
		text='My Portfolio'
		color='#fef0d5'
		onClick={props.onClick}
	/>
);

export default PortfolioButton;