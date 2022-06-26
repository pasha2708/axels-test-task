import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { validationSchema } from '../schemas';


import {
  Overlay,
  Container,
  Comment,
  ButtonClose,
  ButtonDelete,
  ButtonEdit,
  CommentsBlock,
  PhotoStyled
} from '../styled/components/ModalWindow';
import { BasicStateTypes, clearFullImage } from '../redux/reducer';
import { sagaActions } from '../redux/sagaActions';
import EditComment from './EditComment';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledTextField = styled.div`
  margin: 50px 0;
  height: 30px;
`

const ModalWindow = () => {
  const { id: imageId } = useParams<{ id: string }>()
  const { url: imageUrl, comments } = useSelector((state: BasicStateTypes) => state.fullImage);
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false)
  const [commentData, setCommentData] = useState({})

  React.useEffect(() => {
    dispatch(clearFullImage())
    dispatch({
      type: sagaActions.FETCH_FULL_IMAGE, payload: imageId
    });
  }, [dispatch, imageId]);

  const dateFormat = (date: number) => {
    return new Date(date).toLocaleDateString().split('/').join('.')
  }

  const formik: any = useFormik({
    initialValues: {
      author: '',
      text: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('values', values)
      formik.setSubmitting(true);
      dispatch({
        type: sagaActions.SEND_COMMENT,
        payload: {
          imageId,
          id: Math.floor(Math.random() * 10000),
          date: new Date().getTime(),
          ...values
        },
      });
      formik.resetForm();
      formik.setSubmitting(false);
    },
  });

  const deleteComment = (commentId: number) => {
    dispatch({
      type: sagaActions.DELETE_COMMENT,
      payload: { commentId, imageId }
    })
  }

  const openEditModal = (item: any) => {
    setEditModal(true)
    setCommentData(item)
  }

  return (
    <Overlay>
      <Container>
        <Link to='/'>
          <ButtonClose>
            <span>&times;</span>
          </ButtonClose>
        </Link>
        <PhotoStyled>
          <img src={imageUrl} alt='full image' />
        </PhotoStyled>
        <CommentsBlock>
          {comments && comments.map((item) => (
            <Comment key={item.id} className='col'>
              <p>{dateFormat(item.date)}</p>
              <p>{item.text}</p>
              <ButtonDelete onClick={() => deleteComment(item.id)} />
              <ButtonEdit onClick={() => openEditModal(item)} />
            </Comment>
          ))}
        </CommentsBlock>
        <StyledForm>
          <StyledTextField>
            <TextField
              required
              fullWidth
              name='author'
              label='Name'
              onChange={formik.handleChange}
              value={formik.values.author}
              error={formik.touched.author && Boolean(formik.errors.author)}
              helperText={(formik.touched.author && Boolean(formik.errors.author)) && formik.errors.author}
            />
          </StyledTextField>
          <TextField
            required
            name='text'
            type='text'
            label='Your comment'
            onChange={formik.handleChange}
            value={formik.values.text}
            error={formik.touched.text && Boolean(formik.errors.text)}
          />
          <div className='d-grid gap-2'>
            <Button
              onClick={formik.handleSubmit}
              disabled={formik.isSubmitting}
            >
              Submit
            </Button>
          </div>
        </StyledForm>
        {editModal && <EditComment item={commentData} imageId={imageId} onClose={() => setEditModal(false)} />}
      </Container>
    </Overlay>
  );
};

export default ModalWindow;
