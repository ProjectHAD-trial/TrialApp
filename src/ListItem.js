import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";

export default class ListItem extends Component {
  state = {
    animatePress: new Animated.Value(1),
  };

  animateIn() {
    Animated.timing(this.state.animatePress, {
      toValue: 0.8,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  animateOut() {
    Animated.timing(this.state.animatePress, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const { itemwidth } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={() => this.animateIn()}
        onPressOut={() => this.animateOut()}
      >
        <Animated.View
          style={{
            margin: 5,
            //  marginTop: 10,
            width: 200,
            height: 200,
            backgroundColor: "tomato",
            transform: [
              {
                scale: this.state.animatePress,
              },
            ],
          }}
        >
          <Image
            style={{ width: itemwidth, height: 200 }}
            source={this.props.image}
          ></Image>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
