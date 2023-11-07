import React, { Children } from 'react'
import { StyleSheet , Text} from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'
import { LinearGradient } from 'expo-linear-gradient'
export default function Button({ mode, style, ...props }: any) {



  const MyButton = mode === 'gradient' ? ButtonGradiant : ButtonPaper;



  return <MyButton mode={mode} style={style} {...props} />

}
const ButtonPaper = ({ mode, style, ...props }: any) => {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}
const ButtonGradiant = (props) => {
  const { style, text , children} = props
  return (
    <LinearGradient
      colors={["rgb(33, 82, 255)", "rgb(33, 212, 253)"]}
      style={[styles.container, style,
      
        styles.button,
         { backgroundColor: theme.colors.surface },
        style,
        ]}>
      <Text style={[styles.text]}>
        {children}
      </Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 8
  },
  text: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#fefffe',
    fontSize: 18,

  },
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
})
