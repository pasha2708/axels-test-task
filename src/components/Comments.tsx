import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import EditComment from './EditComment';
import { BasicStateTypes } from '../redux/reducer';
import { sagaActions } from '../redux/sagaActions';
import {
	ButtonDelete,
	ButtonEdit,
	CommentsBlock,
	Comment,
} from '../styled/components/Comments';
import { dateFormat } from '../utils';

const Comments = () => {
	const { id: imageId } = useParams<{ id: string }>();
	const dispatch = useDispatch();
	const comments = useSelector(
		(state: BasicStateTypes) => state.fullImage.comments
	);
	const [editModal, setEditModal] = useState(false);
	const [commentData, setCommentData] = useState({});

	const deleteComment = (commentId: number) => {
		dispatch({
			type: sagaActions.DELETE_COMMENT,
			payload: { commentId, imageId },
		});
	};

	const openEditModal = (item: any) => {
		setEditModal(true);
		setCommentData(item);
	};

	return (
		<>
			<CommentsBlock>
				{comments &&
					comments.map((item) => (
						<Comment key={item.id}>
							<p>{dateFormat(item.date)}</p>
							<p>{item.text}</p>
							<ButtonDelete
								onClick={() => deleteComment(item.id)}
							/>
							<ButtonEdit onClick={() => openEditModal(item)} />
						</Comment>
					))}
			</CommentsBlock>
			{editModal && (
				<EditComment
					item={commentData}
					imageId={imageId}
					onClose={() => setEditModal(false)}
				/>
			)}
		</>
	);
};

export default Comments;
