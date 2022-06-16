import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { validationSchema } from '../schemas';

import {
  Overlay,
  Container,
  Comment,
  ButtonClose,
} from '../styled/components/ModalWindow';

import {
  GET_FULL_IMAGE,
  SET_LOADED_FALSE,
  SEND_COMMENT,
  DELETE_COMMENT
} from '../redux/ducks/gallery';
import { BasicStateType } from '../redux/ducks/gallery';

const ModalWindow = (props: { data: BasicStateType, id: number }) => {
  let comments = props.data.fullImage.comments;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({
      type: GET_FULL_IMAGE,
      payload: {
        data: props.id
      }
    });
  }, [dispatch, props.id]);

  const dateFormat = (date: number) => {
    return new Date(date).toLocaleDateString().split('/').join('.')
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      comment: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      formik.setSubmitting(true);
      dispatch({
        type: SEND_COMMENT,
        payload: {
          imageId: props.data.fullImage.id,
          id: Math.floor(Math.random() * 10000),
          comment: values.comment,
          name: values.name,
          date: new Date().getTime(),
        },
      });
      formik.resetForm();
      formik.setSubmitting(false);
    },
  });

  const deleteComment = (e: any) => {
    console.log(e)
    dispatch({
      type: DELETE_COMMENT,
      payload: {
        commentId: e,
        pictureId: props.data.fullImage.id
      }
    }
    )
  }

  return (
    <Overlay>
      <Container className='container'>
        <Link to='/'>
          <ButtonClose onClick={() => dispatch({ type: SET_LOADED_FALSE })}>
            <span>&times;</span>
          </ButtonClose>
        </Link>
        <div className='row'>
          <div className='col col-md-6 col-12'>
            {props.data.isLoaded && (
              <img src={props.data.fullImage.url} alt='' />
            )}
          </div>
          <div className='col-md-6 col-12'>
            {comments &&
              comments.map((item, index) => {
                console.log(index)
                console.log(dateFormat(item.date))
                return (<Comment key={item.id} className='col'>
                  <p>{dateFormat(item.date)}</p>
                  <p>{item.text ? item.text : item.comment}</p>
                  <button onClick={() => deleteComment(item.id)}>Delete</button>
                </Comment>)
              })}
          </div>
        </div>
        <Form className='col-6' onSubmit={formik.handleSubmit}>
          <Form.Control
            className={
              formik.errors.name && formik.touched.name ? 'mt-4' : 'mt-4 mb-4'
            }
            name='name'
            type='text'
            placeholder='Ваше имя'
            onChange={formik.handleChange}
            value={formik.values.name}
            isInvalid={formik.touched.name && Boolean(formik.errors.name)}
          />
          {formik.touched.name && formik.errors.name && (
            <div>{formik.errors.name}</div>
          )}
          <Form.Control
            className={
              formik.errors.comment && formik.touched.comment ? undefined : 'mt-4 mb-4'
            }
            name='comment'
            type='text'
            placeholder='Ваш комментарий'
            onChange={formik.handleChange}
            value={formik.values.comment}
            isInvalid={formik.touched.comment && Boolean(formik.errors.comment)}
          />
          {formik.touched.comment && formik.errors.comment && (
            <div>{formik.errors.comment}</div>
          )}
          <div className='d-grid gap-2'>
            <Button
              variant='primary'
              type='submit'
              disabled={formik.isSubmitting}
            >
              Оставить комментарий
            </Button>
          </div>
        </Form>
      </Container>
    </Overlay>
  );
};

export default ModalWindow;
