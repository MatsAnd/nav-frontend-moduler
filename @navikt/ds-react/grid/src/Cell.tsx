import React, { forwardRef, HTMLAttributes } from "react";
import cl from "classnames";
import "@navikt/ds-css/grid/index.css";

type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface CellProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  white?: boolean;
  padding?: boolean;
  sm: Column;
  md?: Column;
  lg?: Column;
  xl?: Column;
}

const Cell = forwardRef<HTMLDivElement, CellProps>(
  ({ children, sm, md, lg, xl, white, padding, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cl(
          "navds-grid-cell",
          sm && `navds-grid-cell-sm-${sm}`,
          md && `navds-grid-cell-md-${md}`,
          lg && `navds-grid-cell-lg-${lg}`,
          xl && `navds-grid-cell-xl-${xl}`,
          white && `navds-grid-cell--white`,
          padding && `navds-grid-cell--padding`,
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export default Cell;
