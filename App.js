import React from 'react';
import LoginScreen from './src/screens/login/LoginScreen';
import RegistrerScreen from './src/screens/registrer/RegistrerScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UsersScreen from './src/users/UserScreen';
import UserDetailScreen from './src/users/details/UserDetailScreen';

const Stack = createStackNavigator();


const App = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Users" component={UsersScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Registrer" component={RegistrerScreen} options={{headerShown: false}}/>
        <Stack.Screen name="UserDetails" component={UserDetailScreen} options={{headerShown: true}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;