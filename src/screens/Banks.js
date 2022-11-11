import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import BankMenu from '../components/BankMenu';
import Button from '../components/Button';

const Banks = props => {
  return (
    <View style={{}} >
      <BankMenu
        icons={require('../assets/zenith.png')}
        bankName="Zenith Bank"
      />
      <BankMenu
        icons={require('../assets/zenith.png')}
        bankName="Zenith Bank"
      />
      <BankMenu
        icons={require('../assets/zenith.png')}
        bankName="Zenith Bank"
      />

      <Button title="Analyze SMS" />
    </View>
  );
};

export default Banks;
