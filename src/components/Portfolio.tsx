import React, { useContext } from "react";
import styled from "styled-components";
import { Stack, Container, Row, Col } from "react-bootstrap";
import Headline from "../typography/Headline";
import { PortfolioContext, Project } from "../PortfolioContext";

type PortfolioRowProps = {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  imageUrl?: string;
};

const DescriptionContainer = styled(Container)`
  border: 1px solid;
  border-radius: 4px;
`;

const PortfolioRowContainer = styled(Container)`
  padding: 16px;
  border: 1px solid;
  border-radius: 4px;
`;

const StyledDescriptionCol = styled(Col)`
  font-family: AkiraFont;
  a {
  }
`;

const Description: React.FC<{ text: string }> = ({ text }) => {
  return <DescriptionContainer fluid>{text}</DescriptionContainer>;
};

const PortfolioLink: React.FC<{ url: string; text: string }> = ({
  url,
  text,
}) => {
  return (
    <a href={url} target="_blank" className="text-amaranth-purple">
      {text}
    </a>
  );
};

const PortfolioRow: React.FC<PortfolioRowProps> = ({
  title,
  description,
  link,
  linkText,
}) => {
  return (
    <PortfolioRowContainer fluid className="hover:bg-butterscotch hover-zoom">
      <Row>
        <Col className="text-4xl font-extrabold">{title}</Col>
        <StyledDescriptionCol>
          <Stack gap={2}>
            <Description text={description} />
            {link && linkText ? (
              <PortfolioLink url={link} text={linkText} />
            ) : null}
          </Stack>
        </StyledDescriptionCol>
      </Row>
    </PortfolioRowContainer>
  );
};

const Portfolio: React.FC = () => {
  const context = useContext(PortfolioContext);
  const projectData: Project[] = context?.projects || [];
  return (
    <Stack gap={3}>
      <Headline size="xxxxlarge">PROJECTS</Headline>
      {projectData.map((project: Project, index: number) => (
        <PortfolioRow
          key={`${index}_${project.link}`}
          title={project.title}
          description={project.description}
          link={project.link}
          linkText={project.linkText}
        />
      ))}
    </Stack>
  );
};

export default Portfolio;
