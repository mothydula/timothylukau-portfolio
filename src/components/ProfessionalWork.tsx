import React, { useContext } from "react";
import { Stack, Row, Col, Image } from "react-bootstrap";
import Headline from "../typography/Headline";
import Body from "../typography/Body";
import {
  PortfolioContext,
  ProfessionalWork as ProfessionWorkType,
} from "../PortfolioContext";
import styled from "styled-components";

const Project: React.FC<{
  title: string;
  description: string[];
  imgUrl?: string;
}> = ({ title, description, imgUrl }) => {
  const List = styled.ul`
    li {
      display: list-item;
      list-style-type: square;
    }
  `;

  return (
    <Stack className="border-solid border-black border-2 px-4 py-4 rounded">
      <Headline size="large" fluid className="px-0 pb-4">
        {title}
      </Headline>
      <Row>
        {imgUrl !== undefined ? (
          <Col lg={4}>
            <Image src={imgUrl} height={300} width={300} />
          </Col>
        ) : null}

        <Col>
          <Body>
            <List>
              {description.map((text: string) => (
                <li>{text}</li>
              ))}
            </List>
          </Body>
        </Col>
      </Row>
    </Stack>
  );
};

const ProfessionalWork: React.FC = () => {
  const context = useContext(PortfolioContext);
  const professionalWorks: ProfessionWorkType[] =
    context?.professionalWorks || [];
  return (
    <Stack className="mb-4" gap={4}>
      <Headline className="px-0" size="xxxxlarge">
        PROFESSIONAL WORK
      </Headline>
      {professionalWorks.map((work: ProfessionWorkType, index: number) => (
        <Project
          key={`${index}_${work.description.length}`}
          title={work.title}
          description={work.description}
          imgUrl={work.imgUrl}
        />
      ))}
    </Stack>
  );
};

export default ProfessionalWork;
