import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const App = () => {

  const [number, setNumber] = useState('0000000000');

  const handlePress = () => {
    RNImmediatePhoneCall.immediatePhoneCall(number);

  }

  const handleChange = (text) => {
    setNumber(text);
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Enter the number : </Text>
      <TextInput placeholder='Enter the number' style={{ borderWidth: 1, borderColor: 'white', width: '50%' }} onChangeText={handleChange} />
      <Button title='call' onPress={handlePress} />
    </View>
  );
};
export default App;
