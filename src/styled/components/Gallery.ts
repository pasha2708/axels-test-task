import { Col, Container } from "react-bootstrap";
import styled from "styled-components";

const StyledCol = styled(Col)`
	img {
		margin: 15px;
	}
`;

const StyledContainer = styled(Container)`
	margin-left: auto;
    margin-right: auto;
	max-width: 1200px;
	img {
		cursor: pointer;
	}
`;

export { StyledCol, StyledContainer };
