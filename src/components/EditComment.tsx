import React from 'react'
import { Container, Overlay } from '../styled/components/ModalWindow'
import styled from 'styled-components'
import { Button, Form } from 'react-bootstrap'
import { validationSchema } from '../schemas'
import { useFormik } from 'formik';

const EditContainer = styled(Container)`
  min-width: 500px;
`

const EditComment = (props: any) => {

  console.log(props)

  const formik: any = useFormik({
    initialValues: {
      author: props.item.author,
      text: props.item.text,
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      formik.setSubmitting(true);
      // dispatch({
      //   type: sagaActions.SEND_COMMENT,
      //   payload: {
      //     imageId,
      //     id: Math.floor(Math.random() * 10000),
      //     date: new Date().getTime(),
      //     ...values
      //   },
      // });
      formik.resetForm();
      formik.setSubmitting(false);
    },
  });
  return (
    <Overlay>
      <EditContainer>
        <Form className='col-12' onSubmit={formik.handleSubmit}>
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
      </EditContainer>
    </Overlay>

  )
}

export default EditComment
