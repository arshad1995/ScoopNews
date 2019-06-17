import React, { Component } from "react";
import NewsContainer from "./src/containers/NewsContainer";
import { Text, View } from "react-native";

class App extends Component {
  render() {
    return (
      <View>
        <NewsContainer />
      </View>
    );
  }
}

export default App;
