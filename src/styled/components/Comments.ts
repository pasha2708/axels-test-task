import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { colors } from '../vars';

const Comment = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	text-align: start;
	padding: 0 30px;
	p:first-child {
		color: ${colors.primaryGray};
		margin-bottom: 5px;
	}
`;

const CommentsBlock = styled.div`
	grid-area: comments;
	height: 550px;
	overflow-y: auto;
	margin-right: 30px;
	@media (max-width: 900px) {
		padding: 10px;
		margin: 0;
	}
`;

const ButtonDelete = styled(DeleteIcon)`
	position: absolute;
	cursor: pointer;
	top: 0;
	right: 30px;
	color: grey;
`;

const ButtonEdit = styled(EditIcon)`
	position: absolute;
	cursor: pointer;
	top: 0;
	right: 60px;
	color: grey;
`;

export { Comment, CommentsBlock, ButtonDelete, ButtonEdit };
