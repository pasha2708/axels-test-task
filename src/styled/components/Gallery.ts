import { Col, Container } from "react-bootstrap";
import styled from "styled-components";

const StyledCol = styled(Col)`
	img {
		margin-bottom: 1rem;
	}
`;

const StyledContainer = styled(Container)`
	text-align: center;
	img {
		cursor: pointer;
	}
`;

export { StyledCol, StyledContainer };
