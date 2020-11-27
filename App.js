import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contatos from './pages/Contatos';
import TextToSpeech from './pages/TextToSpeech';
import Location from './pages/Location';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contato" component={Contatos} />
        <Tab.Screen name="TextToSpeech" component={TextToSpeech} />
        <Tab.Screen name="Location" component={Location} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;