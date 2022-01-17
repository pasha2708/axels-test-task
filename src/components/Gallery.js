import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Substrate from '../styled/components/Gallery';
import { Switch, Route, Link } from 'react-router-dom';
import { ModalWIndow } from '../components';
import { useDispatch } from 'react-redux';
import { GET_PREVIEW } from '../store/actionTypes';

const Gallery = ({ data }) => {

  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch({type: GET_PREVIEW})
  }, [dispatch]);
  
  return (
    <div>
      <Container>
        <Substrate>
          <Row>
            {data.images && data.images.map((item) => (
              <>
              <Col key={item.id} style={{ marginBottom: "20px" }} md={6} lg={4}>
                <Link to={`/images/${item.id}`}>
                  <img src={item.url} alt="preview" />
                </Link>
              </Col>
              <Switch>
              <Route path={`/images/${item.id}`}>
                <ModalWIndow id={item.id} data={data} />
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
