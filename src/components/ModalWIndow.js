import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

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
  }, [dispatch]);

  const dateFormat = (date) => (
   new Date(date).toLocaleDateString().split('/').join('.'))

  const handleSubmit = (event) => {
    dispatch({
      type: SEND_COMMENT,
      payload: {
        id: props.data.fullImage.id,
        comment: event.target.comment.value,
        name: event.target.comment.value, 
        date: new Date().getTime()
      }
    })
   }

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
          <div className='col-md-6 col-12'>
            {comments && comments.map((item) =>(
              <Comment key={item.id} className="col">
                <p>{dateFormat(item.date)}</p>
                <p>{item.text}</p>
            </Comment>))}
          </div>          
        </div>
        <Form className="col-6" onSubmit={handleSubmit}>
          <Form.Control
            className="mb-4 mt-4"
            name="name"
            type="text"
            placeholder="Ваше имя"
          />
          <Form.Control
            className="mb-4"
            name="comment"
            type="text"
            placeholder="Ваш комментарий"
          />
          <div className="d-grid gap-2">
            <Button 
              variant="primary" 
              type="submit"
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
