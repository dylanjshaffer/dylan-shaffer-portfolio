import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Title2, Title3, Body } from "../../components";
import styled from "styled-components/native";

const Underline = styled(View)`
  height: 2;
  width: inherit;
  margin-top: 4;
  background-color: #c60000;
`;

export class SegmentedOption extends Component {
  handlePress = () => {
    this.setState({ active: true });
  };
  render() {
    const { label, active, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 8 }}>
        <Title3 content={label} textAlign="center" />
        {active ? <Underline /> : null}
      </TouchableOpacity>
    );
  }
}
