import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { validationSchema } from '../schemas';

import {
	Overlay,
	Container,
	ButtonClose,
	PhotoStyled,
} from '../styled/components/ModalWindow';
import { BasicStateTypes, clearFullImage } from '../redux/reducer';
import { sagaActions } from '../redux/sagaActions';
import styled from 'styled-components';
import { TextField, Button, CircularProgress } from '@mui/material';
import Comments from './Comments';

export const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	grid-area: form;
	@media (max-width: 900px) {
		padding: 10px;
	}
`;

export const StyledTextField = styled.div`
	height: 40px;
	margin-top: 15px;
	margin-bottom: 40px;
`;

const ModalWindow = () => {
	const { id: imageId } = useParams<{ id: string }>();
	const { url: imageUrl } = useSelector(
		(state: BasicStateTypes) => state.fullImage
	);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(clearFullImage());
		dispatch({
			type: sagaActions.FETCH_FULL_IMAGE,
			payload: imageId,
		});
	}, [dispatch, imageId]);

	const formik: any = useFormik({
		initialValues: {
			author: '',
			text: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			formik.setSubmitting(true);
			dispatch({
				type: sagaActions.SEND_COMMENT,
				payload: {
					imageId,
					id: Math.floor(Math.random() * 10000),
					date: new Date().getTime(),
					...values,
				},
			});
			formik.resetForm();
			formik.setSubmitting(false);
		},
	});

	return (
		<Overlay>
			<Container>
				<Link to='/'>
					<ButtonClose>
						<span>&times;</span>
					</ButtonClose>
				</Link>
				<PhotoStyled>
					{!imageUrl ? (
						<CircularProgress />
					) : (
						<img src={imageUrl} alt='full' />
					)}
				</PhotoStyled>
				<Comments />
				<StyledForm>
					<StyledTextField>
						<TextField
							required
							fullWidth
							name='author'
							label='Name'
							onChange={formik.handleChange}
							value={formik.values.author}
							error={
								formik.touched.author &&
								Boolean(formik.errors.author)
							}
							helperText={
								formik.touched.author &&
								Boolean(formik.errors.author) &&
								formik.errors.author
							}
						/>
					</StyledTextField>
					<StyledTextField>
						<TextField
							required
							fullWidth
							name='text'
							type='text'
							label='Your comment'
							onChange={formik.handleChange}
							value={formik.values.text}
							error={
								formik.touched.text &&
								Boolean(formik.errors.text)
							}
							helperText={
								formik.touched.text &&
								Boolean(formik.errors.text) &&
								formik.errors.text
							}
						/>
					</StyledTextField>
					<Button
						fullWidth
						variant='contained'
						onClick={formik.handleSubmit}
						disabled={formik.isSubmitting}
					>
						Submit
					</Button>
				</StyledForm>
			</Container>
		</Overlay>
	);
};

export default ModalWindow;
