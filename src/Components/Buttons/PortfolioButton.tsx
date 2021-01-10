import * as Feather from 'react-feather';
import BaseButton from 'src/Components/Buttons/BaseButton';
import Colors from 'src/Styles/Colors';

type Props = {
	onClick: () => void,
};

const PortfolioButton = (props: Props) => (
	<BaseButton
		icon={<Feather.Briefcase color={Colors.Icon} size={28} />}
		text='My Portfolio'
		color='#f9cfcf'
		onClick={props.onClick}
	/>
);

export default PortfolioButton;