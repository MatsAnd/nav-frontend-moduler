import React, { useState } from "react";
import { Stepper, StepperStep } from "../src/index";
import { HashRouter as Router, Link, useLocation } from "react-router-dom";

export default {
  title: "@navikt/stepper",
  component: Stepper,
};

const steps = ["Step1", "Step2", "Step3", "Step4", "Step5", "Step6"];

const StepperWithRouter = () => {
  let location = useLocation();

  return (
    <Stepper activeStep={steps.indexOf(location)}>
      {steps.map((step) => (
        <StepperStep component={Link} to={step}>
          {step}
        </StepperStep>
      ))}
    </Stepper>
  );
};

export const All = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeS, setActiveS] = useState(3);

  return (
    <>
      <Router></Router>

      <h1>Stepper horizontal</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: "2rem",
        }}
      >
        <Stepper activeStep={3}>
          <StepperStep>Step 1</StepperStep>
          <StepperStep>Step 2</StepperStep>
          <StepperStep>Step 3</StepperStep>
          <StepperStep disabled>Step 4</StepperStep>
          <StepperStep>Step 5</StepperStep>
        </Stepper>

        <Stepper activeStep={3}>
          <StepperStep status="done">Step 1</StepperStep>
          <StepperStep status="warning">Step 2</StepperStep>
          <StepperStep status="inProgress">
            Do cupidatat aliqua quis non id deserunt labore officia elit.
          </StepperStep>
          <StepperStep disabled>Step 4</StepperStep>
          <StepperStep>Step 5</StepperStep>
        </Stepper>

        <Stepper activeStep={3} onClick={(e) => setActiveS(e.target.value)}>
          <StepperStep status="done">Step 1</StepperStep>
          <StepperStep status="warning">Step 2</StepperStep>
          <StepperStep status="inProgress">
            Do cupidatat aliqua quis non id deserunt labore officia elit.
          </StepperStep>
          <StepperStep disabled>Step 4</StepperStep>
          <StepperStep>Step 5</StepperStep>
        </Stepper>

        <Stepper
          activeStep={3}
          colorful
          onClick={(e) => setActiveS(e.target.value)}
        >
          <StepperStep status="done">Step 1</StepperStep>
          <StepperStep status="warning">Step 2</StepperStep>
          <StepperStep status="inProgress">
            Do cupidatat aliqua quis non id deserunt labore officia elit.
          </StepperStep>
          <StepperStep disabled>Step 4</StepperStep>
          <StepperStep disabled>Step 5</StepperStep>
        </Stepper>
      </div>

      <h1>Stepper vertical</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Stepper activeStep={3} orientation="vertical">
          <StepperStep>Step 1</StepperStep>
          <StepperStep disabled>Step 2</StepperStep>
          <StepperStep>Step 3</StepperStep>
          <StepperStep>Step 4</StepperStep>
          <StepperStep>Step 5</StepperStep>
        </Stepper>

        <div style={{ maxWidth: "300px" }}>
          <Stepper activeStep={3} orientation="vertical">
            <StepperStep status="done">Step 1</StepperStep>
            <StepperStep disabled status="warning">
              Step 2
            </StepperStep>
            <StepperStep status="inProgress">
              Do cupidatat aliqua quis non id deserunt labore officia elit.
            </StepperStep>
            <StepperStep>Step 4</StepperStep>
            <StepperStep>Step 5</StepperStep>
          </Stepper>
        </div>

        <Stepper
          activeStep={3}
          orientation="vertical"
          onClick={(e) => setActiveS(e.target.value)}
        >
          <StepperStep status="done">Step 1</StepperStep>
          <StepperStep disabled status="warning">
            Step 2
          </StepperStep>
          <StepperStep status="inProgress">
            Do cupidatat aliqua quis non id deserunt labore officia elit.
          </StepperStep>
          <StepperStep>Step 4</StepperStep>
          <StepperStep>Step 5</StepperStep>
        </Stepper>

        <Stepper
          activeStep={3}
          orientation="vertical"
          colorful
          onClick={(e) => setActiveS(e.target.value)}
        >
          <StepperStep status="done">Step 1</StepperStep>
          <StepperStep disabled status="warning">
            Step 2
          </StepperStep>
          <StepperStep status="inProgress">
            Do cupidatat aliqua quis non id deserunt labore officia elit.
          </StepperStep>
          <StepperStep>Step 4</StepperStep>
          <StepperStep>Step 5</StepperStep>
        </Stepper>
      </div>
    </>
  );
};
