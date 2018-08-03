import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const light = "rgba(255,255,255,0.8)";
const dark = "rgba(0,0,0,1)";

const StyledBaseTypography = styled(Text)`
  text-align: ${prop => prop.textAlign || "left"};
  background-color: transparent;
  font-family: "Lato";
  ${prop =>
    prop.flex != undefined || prop.flex != null ? `flex: ${prop.flex}` : null}
  color: ${prop => {
    if (prop.mode == "light") return light;
    if (prop.mode == "dark") return dark;
    if (prop.color) return prop.color;
    return dark;
  }};
`;

const BaseTypography = props => (
  <StyledBaseTypography {...props} allowFontScaling={false}>
    {props.content || props.children}
  </StyledBaseTypography>
);

export const Title1 = styled(BaseTypography)`
  font-size: 80;
  font-weight: 100;
`;
export const Title2 = styled(BaseTypography)`
  font-size: 24;
  font-weight: 200;
`;
export const Title3 = styled(BaseTypography)`
  font-size: 20;
  font-weight: 200;
`;
export const Body = styled(BaseTypography)`
  font-size: 18;
  font-weight: 200;
`;
export const Subhead = styled(BaseTypography)`
  font-size: 15;
  font-weight: 200;
`;
export const Caption = styled(BaseTypography)`
  font-size: 13;
  font-weight: 200;
`;
