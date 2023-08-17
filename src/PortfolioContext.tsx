import { Context, createContext } from "react";
import pythonLogo from "./assets/python-logo.png";
import typescriptLogo from "./assets/ts-logo.png";
import reactLogo from "./assets/react-icon.png";
import postgresLogo from "./assets/postgresql-logo.png";
import apolloLogo from "./assets/apollo-gql-logo.png";
import mySQLLogo from "./assets/mysql-logo.png";
import elasticSearchLogo from "./assets/elasticsearch-logo.png";
import redisLogo from "./assets/redis-logo.png";
import photoshopLogo from "./assets/ps-logo.png";
import flStudioLogo from "./assets/fl-fruit-logo.png";
import figmaImage from "./assets/figma-logo-2.png";
import userEnterableFieldsImage from "./assets/user-enterable-fields.png";
import workStylesQuizImage from "./assets/work-style-quiz-2.png";
import dacrImage from "./assets/save-and-share-dacr.png";

type PortfolioData = {
  tools: Tool[];
  professionalWorks: ProfessionalWork[];
  projects: Project[];
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

export type Project = {
  title: string;
  description: string;
  link: string;
  linkText: string;
};

export const initialProjects: Project[] = [
  {
    title: "SOONSPINS",
    description:
      "Platform for burgeoning artists/DJs in the southwest united states and beyond.  Website and technical platform developed by yours truly. Creative direction and programming is a collaboration with DJ KPMADMAN",
    link: "https://soonspins.com",
    linkText: "Check out soonspins",
  },
  {
    title: "ENGRAVES",
    description:
      "Collective of artists dedicated to increasing cultural awareness and collaboration in Tuscon, Arizona.",
    link: "https://wildcat.arizona.edu/117904/arts/waves-in-the-desert/",
    linkText: "Read more",
  },
  {
    title: "MUSICAL CATALOG",
    description:
      "I work on making beats for my friends as well as standalone musical compositions.",
    link: "https://soundcloud.com/mothydula",
    linkText: "Check out my catalog",
  },
  {
    title: "SOUNDS OF MELANIN",
    description:
      "A VR/musical project that I worked on with talented artists in Tucson, Arizona",
    link: "https://www.facebook.com/tenwestfest/videos/403827213639827/",
    linkText: "WATCH TO LEARN MORE",
  },
];

export const initialTools: Tool[] = [
  { title: "Python", imgUrl: pythonLogo },
  { title: "Typescript", imgUrl: typescriptLogo },
  { title: "React", imgUrl: reactLogo },
  { title: "PostgreSQL", imgUrl: postgresLogo },
  { title: "Apollo GQL", imgUrl: apolloLogo },
  { title: "MySQL", imgUrl: mySQLLogo },
  { title: "Elasticsearch", imgUrl: elasticSearchLogo },
  { title: "Redis", imgUrl: redisLogo },
  { title: "Figma", imgUrl: figmaImage },
  { title: "Photoshop", imgUrl: photoshopLogo },
  { title: "FL Studio", imgUrl: flStudioLogo },
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
    imgUrl: dacrImage,
  },
  {
    title: "Scoring Algorithm for Work Styles Quiz",
    description: [
      "Sole author of scoring algorithm code for Humu's Work Styles Quiz",
      "Collaborated with Data Science team to align on expectations and testing",
      "Wrote extensive unit test suite",
      "Rigorously tested code by comparing unit test results to  Data Science-created R script",
    ],
    imgUrl: workStylesQuizImage,
  },
  {
    title: "User-Enterable Fields feature (PROJECT LEAD)",
    description: [
      "Feature gave users the ability to edit/ add to their profiles in Humu’s Coach surface",
      "Led a team of 5 new engineers (all joining within 4 months of project start)",
      "Mentored engineers on our codebase and stack",
      "Worked with PMs using OKR framework to achieve goals",
    ],
    imgUrl: userEnterableFieldsImage,
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
];

export const PortfolioContext: Context<PortfolioData | null> =
  createContext<PortfolioData | null>(null);
