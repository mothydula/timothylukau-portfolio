import { Container, ContainerProps } from "react-bootstrap";
import styled from "styled-components";
import { TextSize, SIZE_TO_CLASS } from "./util";

const StyledContainer = styled(Container)`
  font-family: AkiraFont;
`;

const Headline: React.FC<ContainerProps & { size: TextSize }> = (props) => {
  const classSuffix: string = SIZE_TO_CLASS[props.size];
  return (
    <StyledContainer
      {...props}
      className={`${props.className} text-${classSuffix}`}
    >
      {props.children}
    </StyledContainer>
  );
};

export default Headline;
