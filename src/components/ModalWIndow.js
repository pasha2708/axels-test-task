import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  Overlay,
  Container,
  Comment,
  ButtonClose,
} from '../styled/components/ModalWindow';

import { GET_FULL_IMAGE, SET_LOADED_FALSE, SEND_COMMENT } from '../redux/ducks/gallery';

const ModalWindow = (props) => {
  let comments = props.data.fullImage.comments;
  const dispatch = useDispatch();
  
  React.useEffect(() => {   
    dispatch({
      type: GET_FULL_IMAGE,
      payload: props.id
      })
  }, [dispatch, props.id]);

  const dateFormat = (date) => (
   new Date(date).toLocaleDateString().split('/').join('.'))

  const validationSchema = yup.object({
    name: yup
    .string('Введите ваше имя')
    .required('Введите ваше имя')
    .min(3, 'Минимальное количество символов: 3')
    .max(15, 'Максимальное количество символов: 15'),
    comment: yup
    .string('Введите комментарий')
    .required('Введите комментарий')
    .min(5, 'Минимальное количество символов: 5')
    .max(100, 'Максимальное количество символов: 100')
  });

  const formik = useFormik({
    initialValues:{
      name: "",
      comment: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      formik.setSubmitting(true)
      dispatch({
        type: SEND_COMMENT,
        payload: {
          id: props.data.fullImage.id,
          comment: values.comment,
          name: values.name, 
          date: new Date().getTime()
        }
      })
      formik.resetForm()
      formik.setSubmitting(false)
    }
  })

  return (
    <Overlay>
      <Container className="container">
        <Link exact="true" to="/">
          <ButtonClose onClick={() => dispatch({type: SET_LOADED_FALSE})}>
            <span>&times;</span>
          </ButtonClose>
        </Link>
        <div className="row">
          <div className="col col-md-6 col-12">
            {props.data.isLoaded && <img src={props.data.fullImage.url} alt="" />}
          </div>
          <div className='col-md-6 col-12'>
            {comments && comments.map((item) =>(
              <Comment key={item.id} className="col">
                <p>{dateFormat(item.date)}</p>
                <p>{item.text}</p>
            </Comment>))}
          </div>          
        </div>
        <Form className="col-6" onSubmit={formik.handleSubmit}>
          <Form.Control
            className= {formik.errors.name && formik.touched.name ? "mt-4" : "mt-4 mb-4"}
            name="name"
            type="text"
            placeholder="Ваше имя"
            onChange={formik.handleChange}
            value={formik.values.name}
            isInvalid={formik.touched.name && Boolean(formik.errors.name)}
          />
          {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
          ) : null}
          <Form.Control
            className={formik.errors.comment && formik.touched.comment ? null : "mt-4 mb-4"}
            name="comment"
            type="text"
            placeholder="Ваш комментарий"
            onChange={formik.handleChange}
            value={formik.values.comment}
            isInvalid={formik.touched.comment && Boolean(formik.errors.comment)}
          />
          {formik.touched.name && formik.errors.comment ? (
         <div>{formik.errors.comment}</div>
          ) : null}
          <div className="d-grid gap-2">
            <Button 
              variant="primary" 
              type="submit"
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
