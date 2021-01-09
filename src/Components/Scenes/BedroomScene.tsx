import styled from 'styled-components';
import FlexRow from 'src/Components/Containers/FlexRow';

const SceneContainer = styled(FlexRow)`
	background-color: #f00;
`;

const BedroomScene = () => (
	<SceneContainer>
		Hello
	</SceneContainer>
);

export default BedroomScene;