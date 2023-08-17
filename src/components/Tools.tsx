import React, { useContext } from "react";
import { Col, Row, Container, Image, Stack } from "react-bootstrap";
import { PortfolioContext, Tool } from "../PortfolioContext";
import styled from "styled-components";
import Headline from "../typography/Headline";

const ToolRow: React.FC<{ title: string; imgUrl: string }> = ({
  title,
  imgUrl,
}) => {
  const StyledContainer = styled(Container)`
    border: 1px solid;
    border-radius: 4px;
  `;
  return (
    <StyledContainer fluid className="hover:bg-celadon hover-zoom">
      <Row className="justify-content-md-center py-6 px-6">
        <Col sm={2}>
          <Image src={imgUrl} height={100} width={100} />
        </Col>
        <Col sm={2} className="text-4xl">
          {title}
        </Col>
      </Row>
    </StyledContainer>
  );
};

const Tools: React.FC = () => {
  const data = useContext(PortfolioContext);
  const tools: Tool[] = data?.tools || [];
  return (
    <Stack gap={3} className="mb-4">
      <Headline size="xxxxlarge">TOOLS</Headline>
      {tools.map((tool: Tool, index: number) => (
        <ToolRow
          title={tool.title}
          imgUrl={tool.imgUrl}
          key={`${tool.title}_${index}`}
        />
      ))}
    </Stack>
  );
};

export default Tools;
