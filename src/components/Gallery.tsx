import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ModalWindow } from '../components';
import { StyledCol, StyledContainer } from '../styled/components/Gallery';
import { sagaActions } from '../redux/sagaActions';
import { BasicStateTypes } from '../redux/reducer';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

const GalleryStyle = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const Gallery: React.FC = () => {
	const images = useSelector((state: BasicStateTypes) => state.images);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch({ type: sagaActions.FETCH_IMAGES });
	}, [dispatch]);

	return (
		<StyledContainer>
			<GalleryStyle>
				{!images ? (
					<CircularProgress />
				) : (
					images.map((item) => (
						<StyledCol key={item.id}>
							<Link to={`/images/${item.id}`}>
								<img src={item.url} alt='preview' />
							</Link>
						</StyledCol>
					))
				)}
				<Routes>
					<Route path={'/images/:id'} element={<ModalWindow />} />
				</Routes>
			</GalleryStyle>
		</StyledContainer>
	);
};

export default Gallery;
