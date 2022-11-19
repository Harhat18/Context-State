import React, { useState } from "react";
import { View, SafeAreaView, Text, Button, TextInput } from "react-native";
import { useDispatch } from "react-redux";

const Primary = () => {
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch("");
  const handleAdd = () => {
    dispatch({ type: "ADD_NAME", payload: { name: text } });
  };
  const handleClean = () => {
    dispatch({ type: "CLEAN_LIST" });
  };
  const handleSaveUsername = () => {
    dispatch({ type: "SET_USERNAME", payload: { username } });
  };
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}>Primary</Text>
      <View
        style={{
          borderWidth: 1,
          margin: 10,
          padding: 5,
          borderColor: "e0e0e0",
        }}
      >
        <TextInput
          value={text}
          placeholder="İsim Giriniz..."
          onChangeText={setText}
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          margin: 10,
          padding: 5,
          borderColor: "e0e0e0",
        }}
      >
        <TextInput
          value={username}
          placeholder="Kullanıcı İsmi Giriniz..."
          onChangeText={setUsername}
        />
      </View>
      <Button title="KAYDET" onPress={handleSaveUsername} />
      <Button title="EKLE" onPress={handleAdd} />
      <Button title="TEMİZLE" onPress={handleClean} />
    </SafeAreaView>
  );
};

export default Primary;
