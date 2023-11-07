import React from "react";
import { useContext, useState } from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../../../components/Themed";
import { AuthContext } from "../../service/providers/authProvider";
import { Button, TextInput } from "react-native-paper";

export const SignIn = ({ navigation, setAuthenticated }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [secureTextEntry, setSecureTextEntry]=useState(true);

  const { signIn }: any = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "powderblue" }} />
      <View style={{ flex: 2, backgroundColor: "skyblue" }}>
        <Text variant="displayLarge">Sign In {secureTextEntry ? 1 : 0}</Text>
        <View style={{ flex: 1, backgroundColor: "powderblue" }}>
          <TextInput
            label="Username"
            value={username}
            mode={"outlined"}
            onChangeText={setUsername}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
            mode={"outlined"}
            right={
              <TouchableOpacity
                onClick={() => setSecureTextEntry(!secureTextEntry)}
              >
                <Text>1</Text>
                <TextInput.Icon icon="eye" />
              </TouchableOpacity>
            }
          />
          <Button onPress={() => signIn({ username, password })}>
            Sign In
          </Button>
        </View>
      </View>
      <View style={{ flex: 3, backgroundColor: "steelblue" }}>
        <Text>index</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => setAuthenticated(true)}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    height: 30,
    width: "40%",
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
