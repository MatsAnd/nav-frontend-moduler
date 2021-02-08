import React, { useState } from "react";
import Popover from "../src/index";
import { Meta } from "@storybook/react/types-6-0";
import { placements } from "@popperjs/core";
export default {
  title: "@navikt/popover",
  component: Popover,
  parameters: {
    chromatic: { disable: true },
  },
} as Meta;

const Template = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <div
        style={{
          background: "#eee",
          border: "1px solid blue",
          textAlign: "center",
          width: "150px",
        }}
        ref={(el) => setAnchorEl(el)}
      >
        {props.placement}
      </div>
      <Popover {...props} anchorEl={anchorEl} onClose={() => {}} open>
        <div style={{ padding: props.size !== "small" && "1rem" }}>
          {props.size === "small" ? "👋" : "Contents"}
        </div>
      </Popover>
    </>
  );
};

export const All = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "4rem 8rem 4rem 8rem",
      }}
    >
      {placements.map((placement) => (
        <div
          style={{
            width: "20%",
            height: "100px",
            margin: "4rem",
          }}
        >
          <Template placement={placement} />
        </div>
      ))}
    </div>
  );
};

export const Small = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "4rem 8rem 4rem 8rem",
      }}
    >
      {placements.map((placement) => (
        <div
          style={{
            width: "20%",
            height: "100px",
            margin: "4rem",
          }}
        >
          <Template placement={placement} size="small" />
        </div>
      ))}
    </div>
  );
};
