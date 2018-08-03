import React, { Component } from "react";
import { View, Image, Dimensions } from "react-native";
import { Title1, Body } from "../../components";
import styled from "styled-components/native";

const Container = styled(View)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export class Design extends Component {
  render() {
    return (
      <Container>
        <Body content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." style={{marginRight: 20, width: 300}} textAlign="left"  />
        <Image
          source={require("../../assets/devices.png")}
          resizeMode="contain"
          style={{ height: 259, width: 304 }}
        />
      </Container>
    );
  }
}