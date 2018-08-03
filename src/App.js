import React, { Component } from "react";
import { View } from "react-native";
import { Header, SegmentedControl, PageContent } from "./components";
import styled from "styled-components";
import "./App.css";

const Container = styled(View)`
  flex: 1;
`;

class App extends Component {
  state = {
    activeIndex: 0
  };
  handleIndexChange = index => {
    this.setState({ activeIndex: index });
  };
  render() {
    const { activeIndex } = this.state;
    return (
      <div className="App-background">
        <Container>
          <Header activeIndex={activeIndex} />
          <SegmentedControl
            activeIndex={activeIndex}
            onChange={this.handleIndexChange}
          />
          <PageContent activeIndex={activeIndex} />
        </Container>
      </div>
    );
  }
}

export default App;
