import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

function Secondary() {
  const list = useSelector((s) => s.nameList);
  const myUserName = useSelector((s) => s.nameList);
  return (
    <SafeAreaView>
      <Text>Username : {}</Text>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </SafeAreaView>
  );
}

export default Secondary;
