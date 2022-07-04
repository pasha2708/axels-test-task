import styled from 'styled-components';
import { colors, sizes } from '../vars';

const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;

const Container = styled.div`
	display: grid;
	grid-template-areas:
		'photo comments'
		'form comments';
	grid-auto-columns: 1fr;
	max-width: ${sizes.container};
	background-color: ${colors.primaryWhite};
	position: absolute;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%);
	padding: 2rem;
	img {
		max-height: 350px;
		width: 100%;
		object-fit: cover;
	}
	@media (max-width: 900px) {
		grid-template-areas:
			'photo'
			'comments'
			'form';
		top: 0;
		transform: translate(-50%, 0);
		padding: 0;
	}
`;

const PhotoStyled = styled.div`
	width: 500px;
	height: 350px;
	grid-area: photo;
	img {
		width: 500px;
	}
`;

const ButtonClose = styled.div`
	cursor: pointer;
	position: absolute;
	right: 20px;
	top: 1px;
	span {
		color: ${colors.primaryGray};
		font-size: 40px;
		&:hover {
			color: ${colors.primaryBlack};
		}
	}
`;

export { Overlay, Container, ButtonClose, PhotoStyled };
