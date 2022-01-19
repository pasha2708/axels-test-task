import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';

import { ModalWindow } from '../components';
import { StyledCol, StyledContainer } from '../styled/components/Gallery';

import { GET_PREVIEW } from '../redux/ducks/gallery';

const Gallery = ({ data }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({type: GET_PREVIEW});
  }, [dispatch]);

  return (
    <StyledContainer>
      <Row>
        {data.images &&
          data.images.map((item) => (
           
              <StyledCol key={item.id} md={6} lg={4}>
                <Link to={`/images/${item.id}`}>
                  <img src={item.url} alt="preview" />
                </Link>
                <Switch>
                <Route path={`/images/${item.id}`}>
                  <ModalWindow id={item.id} data={data} />
                </Route>
              </Switch>
              </StyledCol>
              
            
          ))}
      </Row>
    </StyledContainer>
  );
};

export default Gallery;
