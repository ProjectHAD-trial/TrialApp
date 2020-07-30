import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Animated,
  FlatList,
  Dimensions,
} from "react-native";

import ListItem from "./src/ListItem";

const ITEM_WIDTH = Dimensions.get("window").width;
export default class MyGallery extends Component {
  state = {
    columns: 2,
  };

  render() {
    const { columns } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={columns}
          data={[
            require("./assets/kitty1.jpg"),
            require("./assets/kitty2.jpg"),
            require("./assets/puppy1.jpg"),
            require("./assets/puppy2.jpg"),
            require("./assets/rab1.jpeg"),
            require("./assets/pandas.jpg"),
          ]}
          renderItem={({ item }) => {
            return (
              <ListItem itemwidth={(ITEM_WIDTH - 10) / columns} image={item} />
            );
          }}
          keyExtractor={(index) => {
            return index;
          }}
        />

        <AntDesign name="back" size={40} color="black" direction="rtl" end />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
