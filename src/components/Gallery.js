import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Substrate from '../styled/components/Gallery';
// import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import { ModalWIndow } from '../components';
import { useDispatch } from 'react-redux';
import * as actions from "../store/actions";

const Gallery = ({ data }) => {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(actions.getPreview()); 
  }, []);

  return (
    <div>
      <Container>
        <Substrate>
          <Row>
            {data.map((item) => (
              <>
              <Col key={item.id} style={{ marginBottom: "20px" }} md={6} lg={4}>
                <Link to={`/${item.id}`}>
                  <img src={item.url} alt="preview" />
                </Link>
              </Col>
              <Switch>
              <Route path={`/${item.id}`}>
                <ModalWIndow id={item.id} />
              </Route>
            </Switch>
            </>
            ))}
          </Row>
          
        </Substrate>
      </Container>
    </div>
  );
}

export default Gallery;
