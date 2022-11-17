import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import Brasilia from './components/Brasilia';
import BeloHorizonte from './components/BeloHorizonte';
import Curitiba from './components/Curitiba';
import RiodeJaneiro from './components/RiodeJaneiro';
import SaoPaulo from './components/SaoPaulo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Meteorologia" component={HomeScreen} />
        <Stack.Screen name="Braslia" component={Brasilia} />
        <Stack.Screen name="Belo Horizonte" component={BeloHorizonte} />
        <Stack.Screen name="Curítiba" component={Curitiba} />
        <Stack.Screen name="Rio de Janeiro" component={RiodeJaneiro} />
        <Stack.Screen name="São Paulo" component={SaoPaulo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}