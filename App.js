//importing required modules for adding video ,text,buttons...
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { Video } from "expo-av";
import { Card, Title, Paragraph } from "react-native-paper";
//to adjust the height and width of video acc. to screen
const { height, width } = Dimensions.get("window");

export default function App() {
  return (
    //using expo-av w can add video with audio and its native control
    <View style={styles.container}>
      <Video
        source={require("./assets/avengers-endgame-spot.mp4")}
        rate={1.0}
        volume={1.0}
        resizeMode="contain"
        shouldPlay
        isMuted={false}
        isLooping={false}
        useNativeControls
        style={{ width: width, height: height / 2.5, backgroundColor: "black" }}
      />
      <Card>
        <Card.Title
          title="  H.A.D "
          titleStyle={styles.tostyle}
          subtitle="  Project-Developers"
          subtitleStyle={styles.tosub}
          left={(props) => (
            <Image
              style={styles.foricon}
              source={{
                uri:
                  "https://images.jdmagicbox.com/quickquotes/images_main/hybrid-app-development-348571730-lmzgi.png",
              }}
            />
          )}
        />
        <View style={{ borderBottomWidth: StyleSheet.hairlineWidth }} />
        <Card.Content>
          <Title style={{ fontSize: 20, color: "black" }}>
            AVENGERS ENDGAME TRAILER
          </Title>
          <Paragraph style={{ fontSize: 13, color: "black" }}>
            Published on July 19,2020.
          </Paragraph>
          <Paragraph style={{ fontSize: 15, color: "black" }}>
            'Let the war begins!!'
          </Paragraph>
          <Paragraph style={{ fontSize: 15, color: "black" }}>
            'You know your teams. You know your missions'-- Marvel Studios
            presents Avengers Endgame @ "Whatever it takes" .
          </Paragraph>
        </Card.Content>
      </Card>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: 30,
        }}
      >
        <TouchableOpacity>
          <Image
            style={styles.tonew}
            source={{
              uri: "https://image.flaticon.com/icons/png/512/60/60577.png",
            }}
          ></Image>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  tostyle: {
    fontSize: 25,
    color: "black",
  },
  tosub: {
    fontSize: 12,
    color: "black",
  },
  foricon: {
    width: 55,
    height: 55,
    borderRadius: 26,
  },
  tonew: {
    height: 9,
    width: 10,
    borderWidth: 1,
    padding: 20,
    borderColor: "black",
  },
});
