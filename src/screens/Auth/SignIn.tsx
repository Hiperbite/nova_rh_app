import React from "react";
import { useContext, useState } from "react";

import { TouchableOpacity, StyleSheet } from 'react-native'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import BackButton from '../../components/BackButton'

import { Text, View } from "../../../components/Themed";
import { AuthContext } from "../../service/providers/authProvider";

export const SignIn = ({ navigation, setAuthenticated }: any) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = ''//emailValidator(email.value)
    const passwordError = ''//passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      //return
    }
    setAuthenticated(true)
   
  }
  return (
    <Background>
    
      <Logo />
      <Header>Welcome back.</Header>
    <TextInput
      label="Email"
      returnKeyType="next"
      value={email.value}
      onChangeText={(text) => setEmail({ value: text, error: '' })}
      error={!!email.error}
      errorText={email.error}
      autoCapitalize="none"
      
      textContentType="emailAddress"
      keyboardType="email-address"
    />
    <TextInput
      label="Password"
      returnKeyType="done"
      value={password.value}
      onChangeText={(text) => setPassword({ value: text, error: '' })}
      error={!!password.error}
      errorText={password.error}
      secureTextEntry
    />
    <View style={styles.forgotPassword}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ResetPasswordScreen')}
      >
        <Text style={styles.forgot}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
    <Button mode="gradient" onPress={onLoginPressed}>
      Login
    </Button>
    <View style={styles.row}>
      <Text>Don’t have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignOn')}>
        <Text style={styles.link}>Sign up</Text>
      </TouchableOpacity>
    </View>
  </Background>
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
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    //color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
   // color: theme.colors.primary,
  },
})