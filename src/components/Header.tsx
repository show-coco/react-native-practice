import Constants from "expo-constants";
import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { MenuIcon, StarIcon, TwitterIcon } from "./icon";

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <MenuIcon />
        <TwitterIcon />
        <StarIcon />
      </View>
      <View style={styles.bottom}>
        <FlatList
          data={["ホーム", "メイン", "メインタイムライン", "エンジニア"]}
          renderItem={({ item, index }) => (
            <Text
              style={index === 0 ? styles.itemBlue : styles.itemWhite}
              key={index}
            >
              {item}
            </Text>
          )}
          horizontal={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80 + Constants.statusBarHeight,
    paddingHorizontal: 20,
    backgroundColor: "#15202b",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  top: {
    marginTop: Constants.statusBarHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottom: {
    width: "100%",
    marginTop: 17,
  },
  itemBlue: {
    color: "#1da1f2",
    fontSize: 18,
    marginRight: 20,
    borderBottomColor: "#1da1f2",
    borderBottomWidth: 5,
    fontWeight: "bold",
  },
  itemWhite: {
    color: "gray",
    fontSize: 18,
    marginRight: 20,
    fontWeight: "bold",
  },
});
