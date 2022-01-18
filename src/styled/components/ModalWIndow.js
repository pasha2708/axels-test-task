import styled from 'styled-components';
import { colors, sizes } from '../vars';

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
  max-width: ${sizes.container};
  background-color: ${colors.primaryWhite};
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  img {
    max-height: 350px;
    width: 100%;
    object-fit: cover;
  }
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 10px 30px;
  p:first-child {
    color: ${colors.primaryGray};
    margin-bottom: 5px;
  }
`;

const ButtonClose = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 1px;
  span {
    color: ${colors.primaryGray};
    font-size: 40px;
    &:hover {
      color: ${colors.primaryBlack};
    }
  }
`;

export { Overlay, Container, Comment, ButtonClose }