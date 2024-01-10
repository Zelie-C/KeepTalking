import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './routes/Home';
import Buttons from './routes/Buttons'
import Fils from './routes/Fils'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen name="Menu" component={Home} />
        <Stack.Screen name='Boutons' component={Buttons} />
        <Stack.Screen name='Fils' component={Fils} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
