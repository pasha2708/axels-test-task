import React from 'react';

import { FooterText, FooterDiv } from '../styled/components/Footer'

const Footer = () => (
  <FooterDiv>
    <FooterText>{`© ${new Date().getFullYear()}`}</FooterText>
  </FooterDiv>
);

export default Footer;