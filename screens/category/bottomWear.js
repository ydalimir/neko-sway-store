import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default function BottomWear() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "Trousers",
      source: require("../../assets/Men/bottom-1.png")
    },
    {
      id: 2,
      title: "Shorts",
      source: require("../../assets/Men/bottom-2.png")
    },
    { id: 3, title: "Denim", source: require("../../assets/Men/bottom-3.png") }
  ]);

  return (
    <View style={styles.container}>
      {/* head */}
      <View
        style={{
          flexDirection: "row",
          marginVertical: 15,
          marginHorizontal: 20
        }}
      >
        <View style={{ flex: 1 }}>
          <Text>Bottomwear</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>View all</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* scroll */}
      <View style={{ backgroundColor: "#fff", margin: 0 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {list.map(item => (
            <View style={styles.box} key={item.id}>
              <TouchableOpacity>
                <ImageBackground
                  source={item.source}
                  resizeMode="cover"
                  style={styles.thumb}
                >
                  <Text style={styles.text}>{item.title}</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: "#fff"
  },
  box: {
    marginLeft: 15,
    alignItems: "center",
    alignContent: "center"
  },
  thumb: {
    width: 110,
    height: 120
  },
  text: {
    color: "#fff",
    marginTop: 80,
    textAlign: "center"
  }
});
