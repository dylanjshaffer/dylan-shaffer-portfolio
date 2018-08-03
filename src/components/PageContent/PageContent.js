import React, { Component } from "react";
import { View, Image, Dimensions } from "react-native";
import { Title1, Body } from "../../components";
import styled from "styled-components/native";
import { About } from "./About";
import { Development } from "./Development";
import { Design } from "./Design";
import { Video } from "./Video";

const Container = styled(View)`
  align-items: stretch;
  justify-content: center;
  align-self: center;
  margin-top: 80;
  width: 50vw;
`;

export class PageContent extends Component {
  render() {
    const {activeIndex} = this.props
    return (
      <Container>
        {activeIndex === 0 ? <About /> : null}
        {activeIndex === 1 ? <Development /> : null}
        {activeIndex === 2 ? <Design /> : null}
        {activeIndex === 3 ? <Video /> : null}
      </Container>
    );
  }
}
