import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function BankMenu({icons, bankName}) {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.secondContainer}>
        <View>
          <Image
            source={icons}
            style={{width: 50, height: 50}}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.textStyle}>{bankName}</Text>
      </View>

      <View style={styles.iconContainer}>
        <MaterialIcons
          name="keyboard-arrow-right"
          color="white"
          size={27}
          style={styles.iconStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    marginVertical: 5,
    width: 350,
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 60,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  textStyle: {
    color: 'black',
    paddingTop: 15,
    paddingLeft: 10,
  },

  imageStyle: {
    // resizeMode: 'contain',
    width: 100,
    heigh: 200,
  },

  secondContainer: {
    paddingTop: 4,
    flexDirection: 'row',
  },

  iconContainer: {
    position: 'relative',
    width: 30,
    backgroundColor: '#DBDBDB',
    borderRadius: 50,
    height: 30,
  },

  iconStyle: {
    position: 'absolute',
    top: 1,
    left: 1.5,
    // padding: 10,
    // height: 1
  },
});
