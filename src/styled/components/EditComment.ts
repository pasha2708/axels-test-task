import styled from 'styled-components';

import { colors } from '../vars';

export const EditContainer = styled.div`
	background-color: ${colors.primaryWhite};
	position: absolute;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%);
	padding: 2rem;
	width: 50%;
	@media (max-width: 768px) {
		width: 80%;
		margin: 0;
	}
`;

export const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
`;
