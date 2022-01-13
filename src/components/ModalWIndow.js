import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {
  Overlay,
  Container,
  Comment,
  ButtonClose,
} from '../styled/components/ModalWIndow';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ModalWIndow = (props) => {
  const [imageUrl, setImageUrl] = React.useState('');

  React.useEffect(() => {
    axios
      .get(`https://boiling-refuge-66454.herokuapp.com/images/${props.id}`)
      .then((res) => {
        setImageUrl(res.data.url);
      });
  }, []);

  return (
    <Overlay>
      <Container className='container'>
        <Link to="/" exact>
          <ButtonClose onClick={props.onClose}>
            <span>&times;</span>
          </ButtonClose>
        </Link>
        <div className='row'>
          <div className='col col-md-6 col-12'>
            <img src={imageUrl} alt='' />
          </div>
          <Comment className='col'>
            <p>18.12.19</p>
            <p>Отличное фото</p>
          </Comment>
        </div>
        <Form className='col-6'>
          <Form.Control
            className='mb-4 mt-4'
            type='text'
            placeholder='Ваше имя'
          />
          <Form.Control
            className='mb-4'
            type='text'
            placeholder='Ваш комментарий'
          />
          <div className='d-grid gap-2'>
            <Button
              className='d-grid gap-2'
              as='input'
              type='button'
              value='Оставить комментарий'
            />{' '}
          </div>
        </Form>
      </Container>
    </Overlay>
  );
};

export default ModalWIndow;
