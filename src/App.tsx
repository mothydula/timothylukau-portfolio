import Header from "./components/Header";
import { Container } from "react-bootstrap";
import {
  PortfolioContext,
  initialTools,
  initialProfessionalWorks,
  initialProjects,
} from "./PortfolioContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Portfolio from "./components/Portfolio";
import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import Tools from "./components/Tools";
import ProfessionalWork from "./components/ProfessionalWork";

const AppContainer = styled(Container)``;

const App: React.FC = () => {
  return (
    <AppContainer>
      <PortfolioContext.Provider
        value={{
          tools: initialTools,
          professionalWorks: initialProfessionalWorks,
          projects: initialProjects,
        }}
      >
        <Header />
        <Routes>
          <Route path="*" element={<Navigate to="/projects" replace />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/professional-work" element={<ProfessionalWork />} />
        </Routes>
      </PortfolioContext.Provider>
    </AppContainer>
  );
};
export default App;
