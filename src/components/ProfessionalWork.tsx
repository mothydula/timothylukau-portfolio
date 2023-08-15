import React, { useContext } from "react";
import { Stack, Row, Col, Image } from "react-bootstrap";
import Headline from "../typography/Headline";
import Body from "../typography/Body";
import {
  PortfolioContext,
  ProfessionalWork as ProfessionWorkType,
} from "../PortfolioContext";

const Project: React.FC<{
  title: string;
  description: string[];
  imgUrl?: string;
}> = ({ title, description, imgUrl }) => {
  return (
    <Stack>
      <Headline size="large" fluid className="px-0">
        {title}
      </Headline>
      <Row>
        {imgUrl & <Image />}
        <Col>
          <Body>
            <ul>
              {description.map((text: string) => (
                <li>&#x2022; {text}</li>
              ))}
            </ul>
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
    <Stack>
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