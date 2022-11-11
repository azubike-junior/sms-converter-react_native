import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const Button = ({title}) => {
//  const {onPress, title = 'Save'} = props;
 return (
   <Pressable style={styles.button}>
     <Text style={styles.text}>{title}</Text>
   </Pressable>
 );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginHorizontal: 20,
    marginTop: 50
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});