import React from "react";
import styled from "styled-components";
import { Stack, Container, Row, Col } from "react-bootstrap";
import { Link } from "@mui/material";
import Headline from "../typography/Headline";

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
`;

const Description: React.FC<{ text: string }> = ({ text }) => {
  return <DescriptionContainer fluid>{text}</DescriptionContainer>;
};

const PortfolioLink: React.FC<{ url: string; text: string }> = ({
  url,
  text,
}) => {
  return <Link href={url}>{text}</Link>;
};

const PortfolioRow: React.FC<PortfolioRowProps> = ({
  title,
  description,
  link,
  linkText,
  imageUrl,
}) => {
  return (
    <PortfolioRowContainer fluid>
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
  return (
    <Stack gap={3}>
      <Headline size="xxxxlarge">PORTFOLIO</Headline>
      <PortfolioRow
        title="SOONSPINS"
        description="Platform for burgeoning artists in the southwest united states and beyond"
        link="https://soonspins.com"
        linkText="Check out soonspins"
      />
      <PortfolioRow
        title="ENGRAVES"
        description="Collective of artists dedicated to increasing cultural awareness and collaboration in Tuscon, Arizona"
        link="https://soonspins.com"
        linkText="Check out soonspins"
      />
      <PortfolioRow
        title="MUSICAL CATALOG"
        description="Musical production catalog"
        link="https://soundcloud.com/mothydula"
        linkText="Check out mothy dula catalog"
      />
    </Stack>
  );
};

export default Portfolio;
