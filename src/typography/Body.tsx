import React from "react";
import styled from "styled-components";
import { TextSize, SIZE_TO_CLASS } from "./util";

const Body: React.FC<{
  children: React.ReactNode;
  size?: Omit<TextSize, "xlarge" | "xxlarge" | "xxxlarge" | "xxxxlarge">;
}> = ({ children, size = "medium" }) => {
  const Paragraph = styled.p`
    font-family: OuterSansFont;
  `;

  const classSuffix: string = SIZE_TO_CLASS[size as TextSize];

  return <Paragraph className={`text-${classSuffix}`}>{children}</Paragraph>;
};

export default Body;
