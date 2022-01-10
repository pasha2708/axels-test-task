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
  z-index: 1;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  width: 1000px;
  height: 600px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 40px;
`;

const Comment = styled.div`
  padding: 10px 30px;
  p:first-child{
    color: #C0C0C0;
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
      <Container onClick={e => e.stopPropagation()}>
        <img height={350} src={imageUrl} alt="" />
        <Comment>
          <p>18.12.19</p>
          <p>Отличное фото</p>
        </Comment>
        <Form>
          <Form.Control className="mb-4 mt-4" type="text" placeholder="Ваше имя" />
          <Form.Control className="mb-4" type="text" placeholder="Ваш комментарий" />
          <div className="d-grid gap-2">
          <Button className="d-grid gap-2" as="input" type="button" value="Оставить комментарий" />{" "}
          </div>
        </Form>
      </Container>
    </Overlay>
  );
}

export default ModalWIndow;
