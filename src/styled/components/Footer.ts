import styled from 'styled-components';
import { colors } from '../vars';

const FooterText = styled.div`
  text-align: center;
  color: ${colors.primaryGray};
  margin-top: 20px;
`;

const FooterDiv = styled.div`
  position: absolute; 
  bottom: 0;
  width: 100vw;
  height: 60px;
  border-top: 1px solid ${colors.primaryGray};
  padding: 0 20px;
`;

export { FooterText, FooterDiv };
