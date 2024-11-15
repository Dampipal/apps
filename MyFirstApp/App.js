import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
const [count,setCount] = useState(0)

  return (
    <View >
      <Text>Counter APP !</Text>
      <Text>{count}</Text>
      <Button title='Increse here' onPress={() =>{setCount(count + 1)}}/>
      <Button title='Dicrese here' onPress={() =>{setCount(count - 1)}}/>
    </View>
  );
}

