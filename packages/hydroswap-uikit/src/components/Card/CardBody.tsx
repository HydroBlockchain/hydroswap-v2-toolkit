import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;
const CardBody = styled.div<CardBodyProps>`
background-color: ${({ theme }) => theme.colors.gradients.cardBody};
  ${space}
`;

CardBody.defaultProps = {
  p: "24px",
};

export default CardBody;
