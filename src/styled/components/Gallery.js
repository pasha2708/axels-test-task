import { Col, Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCol = styled(Col)`
  * {
    margin-bottom: 1rem;
  }
`;

const StyledContainer = styled(Container)`
  display: block;
  text-align: center;
  img {
    cursor: pointer;
  }
`;

export { StyledCol, StyledContainer };