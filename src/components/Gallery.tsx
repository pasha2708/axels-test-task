import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ModalWindow } from '../components';
import { StyledCol, StyledContainer } from '../styled/components/Gallery';
import { sagaActions } from '../redux/sagaActions';
import { BasicStateTypes, ImageTypes } from '../redux/reducer';
import styled from 'styled-components';


const GalleryStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
`

const Gallery = () => {
  const images = useSelector((state: BasicStateTypes) => state.images);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: sagaActions.FETCH_IMAGES });
  }, [dispatch]);

  return (
    <StyledContainer>
      <GalleryStyle>
        {images &&
          images.map((item: ImageTypes) => (
            <StyledCol key={item.id}>
              <Link to={`/images/${item.id}`}>
                <img src={item.url} alt='preview' />
              </Link>
            </StyledCol>
          ))}
        <Switch> //TODO Routes!!!
          <Route path={'/images/:id'}>
            <ModalWindow />
          </Route>
        </Switch>
      </GalleryStyle>
    </StyledContainer>
  );
};

export default Gallery;
