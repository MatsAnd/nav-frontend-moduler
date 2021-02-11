import React, { forwardRef, HTMLAttributes } from "react";
import { Cell, CellProps } from "../../grid/src";
import cl from "classnames";

export interface SectionProps
  extends Omit<CellProps, "sm" | "md" | "lg" | "xl" | "padding"> {
  children?: React.ReactNode;
  className?: string;
  left?: boolean;
  right?: boolean;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, left, right, className, ...rest }, ref) => (
    <>
      {left && (
        <Cell
          sm={4}
          md={8}
          lg={12}
          xl={3}
          padding
          className={cl("navds-layout-section-left", className)}
          {...rest}
        >
          {children}
        </Cell>
      )}
      {!left && !right && (
        <Cell
          sm={4}
          md={8}
          lg={8}
          xl={6}
          padding
          className={cl("navds-layout-section-main", className)}
          {...rest}
        >
          {children}
        </Cell>
      )}
      {right && (
        <Cell
          sm={4}
          md={8}
          lg={4}
          xl={3}
          padding
          className={cl("navds-layout-section-right", className)}
          {...rest}
        >
          {children}
        </Cell>
      )}
    </>
  )
);

export default Section;
