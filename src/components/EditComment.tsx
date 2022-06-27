import React from 'react'
import { ButtonClose, Container, Overlay } from '../styled/components/ModalWindow'
import styled from 'styled-components'
import { validationSchema } from '../schemas'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import { sagaActions } from '../redux/sagaActions'
import { StyledTextField } from './ModalWindow'
import { TextField, Button } from '@mui/material';
import { colors } from '../styled/vars';

const EditContainer = styled.div`
background-color: ${colors.primaryWhite};
	position: absolute;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%);
	padding: 2rem;
  width: 50%;
`

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const EditComment = (props: any) => {
  const dispatch = useDispatch();

  const formik: any = useFormik({
    initialValues: {
      author: props.item.author,
      text: props.item.text,
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      formik.setSubmitting(true);
      dispatch({
        type: sagaActions.EDIT_COMMENT,
        payload: {
          imageId: props.imageId,
          id: props.item.id,
          date: new Date().getTime(),
          ...values
        },
      });
      formik.resetForm();
      formik.setSubmitting(false);
      props.onClose()
    },
  });
  return (
    <Overlay>
      <EditContainer>
        <ButtonClose onClick={props.onClose}>
          <span>&times;</span>
        </ButtonClose>
        <StyledForm>
          <StyledTextField>
            <TextField
              disabled
              fullWidth
              name='author'
              label='Name'
              value={formik.values.author}
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
              error={formik.touched.text && Boolean(formik.errors.text)}
              helperText={(formik.touched.text && Boolean(formik.errors.text)) && formik.errors.text}
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
      </EditContainer>
    </Overlay>

  )
}

export default EditComment
