import React from "react";
import Alert from "../src/index";

export default {
  title: "@navikt/alert",
  component: Alert,
};

import InformationFilled from "@navikt/ds-icons/svg/InformationFilled.svg";

const variants: Array<"error" | "warning" | "info" | "success"> = [
  "error",
  "warning",
  "info",
  "success",
];

export const HtmlTest = () => {
  return (
    <div className="navds-alert navds-alert--info">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9 19v-2h2v-5H9v-2h4v7h2v2H9zm3-14a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
          fill="currentColor"
        ></path>
      </svg>{" "}
      Info
    </div>
  );
};

export const All = () => {
  return (
    <>
      <h1>Alert</h1>
      {variants.map((variant) => (
        <Alert key={variant} variant={variant}>
          {Array(8).fill(`${variant} content`).join(" ")}
        </Alert>
      ))}
      <h2>Small</h2>
      <div>
        {variants.map((variant) => (
          <Alert key={variant} variant={variant} size="small">
            {Array(8).fill(`${variant} content`).join(" ")}
          </Alert>
        ))}
      </div>
    </>
  );
};
