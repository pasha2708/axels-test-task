import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { validationSchema } from '../schemas';


import {
  Overlay,
  Container,
  Comment,
  ButtonClose,
  ButtonDelete,
  ButtonEdit
} from '../styled/components/ModalWindow';
import { BasicStateTypes, clearFullImage } from '../redux/reducer';
import { sagaActions } from '../redux/sagaActions';
import EditComment from './EditComment';


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
      <Container className='container'>
        <Link to='/'>
          <ButtonClose>
            <span>&times;</span>
          </ButtonClose>
        </Link>
        <div className='row'>
          <div className='col col-md-6 col-12'>
            <img src={imageUrl} alt='full image' />
          </div>
          <div className='col-md-6 col-12'>
            {comments && comments.map((item) => (
              <Comment key={item.id} className='col'>
                <p>{dateFormat(item.date)}</p>
                <p>{item.text}</p>
                <ButtonDelete onClick={() => deleteComment(item.id)} />
                <ButtonEdit onClick={() => openEditModal(item)} />
              </Comment>
            ))}
          </div>
        </div>
        <Form className='col-6' onSubmit={formik.handleSubmit}>
          <Form.Control
            className={
              formik.errors.author && formik.touched.author ? 'mt-4' : 'mt-4 mb-4'
            }
            required
            name='author'
            type='text'
            placeholder='Name'
            onChange={formik.handleChange}
            value={formik.values.author}
            isInvalid={formik.touched.author && Boolean(formik.errors.author)}
          />
          {formik.touched.author && formik.errors.author && (
            <div>{formik.errors.author}</div>
          )}
          <Form.Control
            className={
              formik.errors.text && formik.touched.text ? undefined : 'mt-4 mb-4'
            }
            required
            name='text'
            type='text'
            placeholder='Your comment'
            onChange={formik.handleChange}
            value={formik.values.text}
            isInvalid={formik.touched.text && Boolean(formik.errors.text)}
          />
          {formik.touched.text && formik.errors.text && (
            <div>{formik.errors.text}</div>
          )}
          <div className='d-grid gap-2'>
            <Button
              variant='primary'
              type='submit'
              disabled={formik.isSubmitting}
            >
              Submit
            </Button>
          </div>
        </Form>
        {editModal && <EditComment item={commentData} imageId={imageId} onClose={() => setEditModal(false)} />}
      </Container>
    </Overlay>
  );
};

export default ModalWindow;
