import React, { Component } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { SegmentedOption } from "./SegmentedOption";

const Container = styled(View)`
  flex: 1;
  flex-direction: row;
  width: 50vw;
  max-width: 50vw;
  justify-content: space-evenly;
  align-self: center;
  margin-top: 20;
  padding-left: 40;
  padding-right: 40;
`;

export class SegmentedControl extends Component {
  render() {
    const { activeIndex, onChange } = this.props;
    return (
      <Container>
        <SegmentedOption
          label="ABOUT"
          active={activeIndex === 0}
          onPress={() => onChange(0)}
        />
        <SegmentedOption
          label="DEVELOPMENT"
          active={activeIndex === 1}
          onPress={() => onChange(1)}
        />
        <SegmentedOption
          label="DESIGN"
          active={activeIndex === 2}
          onPress={() => onChange(2)}
        />
        <SegmentedOption
          label="VIDEO"
          active={activeIndex === 3}
          onPress={() => onChange(3)}
        />
      </Container>
    );
  }
}
