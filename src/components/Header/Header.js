import React, { Component } from "react";
import { View, Image, Dimensions } from "react-native";
import { Title1 } from "../../components";
import styled from "styled-components/native";

const Container = styled(View)`
  align-items: center;
  justify-content: center;
  padding-top: 100;
`;

export class Header extends Component {
  getUrl = () => {
    const { activeIndex } = this.props;
    if (activeIndex === 0) return require("../../assets/dylan-about.png");
    if (activeIndex === 1) return require("../../assets/dylan-code.png");
    if (activeIndex === 2) return require("../../assets/dylan-design.png");
    if (activeIndex === 3) return require("../../assets/dylan-video.png");
    // if (activeIndex === 3) return require("../../assets/dylan-video-2.png");
  };
  render() {
    return (
      <Container>
        <Image source={this.getUrl()} style={{ height: 200, width: 200 }} />
        <Title1 content="DYLAN SHAFFER" textAlign="center" />
      </Container>
    );
  }
}
