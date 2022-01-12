import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Substrate from '../styled/components/Gallery';
import axios from 'axios';

const Gallery = (props) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://boiling-refuge-66454.herokuapp.com/images')
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div>
      <Container>
        <Substrate>
          <Row>
            {data.map((item) => (
              <Col key={item.id} style={{ marginBottom: "20px" }} md={6} lg={4}>
                <img onClick={props.setActive} src={item.url} alt="preview" />
              </Col>
            ))}
          </Row>
        </Substrate>
      </Container>
    </div>
  );
}

export default Gallery;
