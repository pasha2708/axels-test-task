import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {
  Overlay,
  Container,
  Comment,
  ButtonClose,
  CommentList
} from '../styled/components/ModalWIndow';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GET_FULL_IMAGE, SET_LOADED_FALSE } from '../store/actionTypes';

const ModalWIndow = (props) => {

  let comments = props.data.fullImage.comments;

  const dispatch = useDispatch();
  React.useEffect(() => {   
    dispatch({
      type: GET_FULL_IMAGE,
      payload: props.id
      })
  }, [dispatch]);

  const dateFormat = (date) =>(
   new Date(date).toLocaleDateString().split('/').join('.'))

  return (
    <Overlay>
      <Container className="container">
        <Link to="/" exact>
          <ButtonClose onClick={() => dispatch({type: SET_LOADED_FALSE})}>
            <span>&times;</span>
          </ButtonClose>
        </Link>
        <div className="row">
          <div className="col col-md-6 col-12">
            {props.data.isLoaded && <img src={props.data.fullImage.url} alt="" />}
          </div>
          <CommentList className='col-md-6 col-12'>
            {comments && comments.map((item) =>(
              <Comment key={item.id} className="col">
                <p>{dateFormat(item.date)}</p>
                <p>{item.text}</p>
            </Comment>))}
          </CommentList>          
        </div>
        <Form className="col-6">
          <Form.Control
            className="mb-4 mt-4"
            type="text"
            placeholder="Ваше имя"
          />
          <Form.Control
            className="mb-4"
            type="text"
            placeholder="Ваш комментарий"
          />
          <div className="d-grid gap-2">
            <Button
              className="d-grid gap-2"
              as="input"
              type="button"
              value="Оставить комментарий"
            />
          </div>
        </Form>
      </Container>
    </Overlay>
  );
};

export default ModalWIndow;
