/** @jsx jsx */
import { jsx } from "@emotion/core";
import { createContext, useContext, createElement } from "react";
import { getColumnStyles, getRowStyles } from "./stylesheet";

const DEFAULT_CONTEXT = {
  reverse: false,
  gutter: 10,
  breakpoints: { xs: 0, sm: 768, md: 1024, lg: 1920 },
  rootEM: 16,
  cols: 12
};

const GridContext = createContext(DEFAULT_CONTEXT);

const getGridElement = styleFunction => ({
  as = "div",
  children,
  css = {},
  ...props
}) => {
  const Tag = nextProps =>
    createElement(as, { ...props, ...nextProps }, children);
  return (
    <Tag css={{ ...styleFunction(useContext(GridContext), props), ...css }} />
  );
};

export const GridProvider = ({ children, ...props }) => {
  // Get props from parent provider if it exists
  const parentContext = useContext(GridContext) || DEFAULT_CONTEXT;
  // Combine parent context with props to get new provider values
  const { reverse, gutter, breakpoints, rootEM, cols } = {
    ...parentContext,
    ...props
  };
  return (
    <GridContext.Provider
      value={{ gutter, reverse, breakpoints, rootEM, cols }}
    >
      {children}
    </GridContext.Provider>
  );
};

export const Col = getGridElement(getColumnStyles);

export const Row = props => {
  const Row = getGridElement(getRowStyles);
  return (
    <GridProvider {...props}>
      <Row {...props} />
    </GridProvider>
  );
};
