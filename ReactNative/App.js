import React from "react";
import index from "./src/index";
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <Screen/>;
  }
}

const Screen=StackNavigator({
 
  Index: {
    screen: index,
  },
});
