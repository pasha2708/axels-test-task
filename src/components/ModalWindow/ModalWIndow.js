import React from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Container = styled.div`
  max-width: 1000px;
  
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  img {
    max-height: 350px;
    width: 100%;
    object-fit: cover;
  }
`;

const Comment = styled.div`
  padding: 10px 30px;
  p:first-child {
    color: #c0c0c0;
    margin-bottom: 5px;
  }
`;

function ModalWIndow(props) {
  const [imageUrl, setImageUrl] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://boiling-refuge-66454.herokuapp.com/images/238")
      .then((res) => {
        setImageUrl(res.data.url);
      });
  }, []);

  return (
    <Overlay onClick={props.onClose}>
      <Container className="container" onClick={(e) => e.stopPropagation()}>
        <div className="row">
          <div className="col col-md-6 col-12">
            <img src={imageUrl} alt="" />
          </div>
          <Comment className="col">
            <p>18.12.19</p>
            <p>Отличное фото</p>
          </Comment>
        </div>
        <Form>
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
            />{" "}
          </div>
        </Form>
      </Container>
    </Overlay>
  );
}

export default ModalWIndow;
