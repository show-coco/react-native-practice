import Constants from "expo-constants";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

/** ScrollView vs FlatList
 * ScrollViewは一度に全てのアイテムをレンダリングする。
 * 一方, FlatListはアイテムが表示されそうになった時にレンダリングし、アイテムが画面外に行くとアイテムをメモリから削除する。
 * そのため、無限スクロールなどではFlatListを使うべき。
 * */

/** 使用する時は、ScrollViewの高さをバインドする必要がある。
 * ScrollViewに高さを直接設定するか親で高さをバインドする。
 * ScrollViewに直接設定するのは非推奨
 * */

export const LearnScrollView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  text: {
    fontSize: 42,
  },
});
