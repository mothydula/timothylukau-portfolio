import React, { Context, createContext } from "react";

type PortfolioData = {
  tools: Tool[];
  professionalWorks: ProfessionalWork[];
};

export type Tool = {
  title: string;
  imgUrl: string;
};

export type ProfessionalWork = {
  title: string;
  description: string[];
  imgUrl?: string;
};

export const initialTools: Tool[] = [
  { title: "Python", imgUrl: "src/assets/python-logo.png" },
  { title: "Typescript", imgUrl: "src/assets/ts-logo.png" },
  { title: "React", imgUrl: "src/assets/react-icon.png" },
  { title: "PostgreSQL", imgUrl: "src/assets/postgresql-logo.png" },
  { title: "Apollo GQL", imgUrl: "src/assets/apollo-gql-logo.png" },
  { title: "MySQL", imgUrl: "src/assets/mysql-logo.png" },
  { title: "Elasticsearch", imgUrl: "src/assets/elasticsearch-logo.png" },
];

export const initialProfessionalWorks: ProfessionalWork[] = [
  {
    title: "Saving and Sharing Dynamic Adaptive Culture Reports (PROJECT LEAD)",
    description: [
      "Allowed users to save and share dynamically generated filtered culture reports",
      "Led a team of about 1-2 engineers including myself",
      "Worked on countless UI state descriptions with Design to make sure the mocks aligned with the React paradigm",
      "Built out multiple microservices in Python to manage Access Control Lists as well as saved and shared reports",
    ],
    imgUrl: "src/assets/save-and-share-dacr.png",
  },
  {
    title: "1:1 Agenda Digest (PROJECT LEAD)",
    description: [
      "Was the sole engineer to do pre-work for overhauling the email rendering system in our codebase",
      "Collaborated with infrastructure team on changes to email delivery system",
      "Worked on migrating email delivery system for comms from Pub-sub to Google Cloud Tasks Queues",
      "Refactored comms content resolvers/formatters using Python inheritance principles",
      "Worked with PMs in OKR framework to adjust deadlines and expectations",
    ],
  },
  {
    title: "Find Any Coworker Feature (PROJECT LEAD)",
    description: [
      "Implemented prework and concurrently educated/researched the ins and outs of React-Select and 3 year old legacy code in order to set up tasks and create a tech spec in under 4 days",
      "Leveraged legacy code to write a tech spec that implemented employee search using Elasticsearch, GraphQL and React",
      "Mentored senior engineers on the stack required to implement the feature",
      "Worked with design on the details of implementing mobile and desktop to develop a responsive FE solution",
    ],
  },
  {
    title: "Connecting Company Values to Humu Insights (PROJECT LEAD)",
    description: [
      "Drafted Elasticsearch queries in Kibana cloud",
      "Created all necessary Elasticsearch aggregations/queries in Python",
      "Was the sole writer of all unit tests using unittest library",
      "Mentored engineers on Selenium Python library for end-to-end testing",
      "Delivered Tech Spec and Jira tasks within 2 days of receiving PRD due to customer-related time constraints",
    ],
  },
  {
    title: "Scoring Algorithm for Work Styles Quiz",
    description: [
      "Sole author of scoring algorithm code for Humu's Work Styles Quiz",
      "Collaborated with Data Science team to align on expectations and testing",
      "Wrote extensive unit test suite",
      "Rigorously tested code by comparing unit test results to  Data Science-created R script",
    ],
    imgUrl: "src/assets/work-style-quiz-2.png",
  },
  {
    title: "User-Enterable Fields feature (PROJECT LEAD)",
    description: [
      "Feature gave users the ability to edit/ add to their profiles in Humu’s Coach surface",
      "Led a team of 5 new engineers (all joining within 4 months of project start)",
      "Mentored engineers on our codebase and stack",
      "Worked with PMs using OKR framework to achieve goals",
    ],
    imgUrl: "src/assets/user-enterable-fields.png",
  },
];
export const PortfolioContext: Context<PortfolioData | null> =
  createContext<PortfolioData | null>(null);