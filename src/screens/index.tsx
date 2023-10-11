import React from "react";
import {
  StepRouter,
  useStepContext,
  Pages,
  Steps,
  StepContextProvider,
} from "./router";
import { Dash as Template } from "@/components/general/template";
import useClient from "@/components/hook/useClient";

const Router = () => {
  const stepRouter = useStepContext();
  return StepRouter(stepRouter, Steps);
};

const App = () => {
  const isClient = useClient();
  return isClient ? (
    <StepContextProvider pages={Pages} steps={Object.keys(Steps)}>
      <Template>
        <Router />
      </Template>
    </StepContextProvider>
  ) : (
    <></>
  );
};

export default App;
