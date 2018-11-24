// @flow strict
import React from "react";
import withStyle from "../../withStyle";

const SvgFabStackOverflow = props => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M293.7 300l-181.2-84.5 16.7-36.5 181.3 84.7-16.8 36.3zm48-76L188.2 95.7l-25.5 30.8 153.5 128.3 25.5-30.8zm39.6-31.7L262 32l-32 24 119.3 160.3 32-24zM290.7 311L95 269.7 86.8 309l195.7 41 8.2-39zm31.6 129H42.7V320h-40v160h359.5V320h-40v120zm-39.8-80h-200v39.7h200V360z" />
  </svg>
);

export const FabStackOverflow = withStyle(
  SvgFabStackOverflow,
  "FabStackOverflow",
  false
);
