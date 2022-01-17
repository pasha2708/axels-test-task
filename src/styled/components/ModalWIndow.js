import styled from 'styled-components';
import { primaryGray, primaryBlack } from '../vars';

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
  max-width: 1000px;
  background-color: #fff;
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

const CommentList = styled.div`
  /* display: flex; */
`

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 10px 30px;
  p:first-child {
    color: ${primaryGray};
    margin-bottom: 5px;
  }
`;

const ButtonClose = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 1px;
  span {
    color: ${primaryGray};
    font-size: 40px;
    &:hover {
      color: ${primaryBlack};
    }
  }
`;

export { Overlay, Container, Comment, ButtonClose, CommentList }