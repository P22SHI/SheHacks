import * as Feather from 'react-feather';
import BaseButton from 'src/Components/Buttons/BaseButton';
import Colors from 'src/Styles/Colors';

type Props = {
	onClick: () => void,
};

const BedroomButton = (props: Props) => (
	<BaseButton
		icon={<Feather.Home color={Colors.Icon} size={28} />}
		text='My Bedroom'
    color='#f9cfcf'
		onClick={props.onClick}
	/>
);

export default BedroomButton;