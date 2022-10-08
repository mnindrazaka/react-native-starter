import * as React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function DashboardScreen(){
return (
  <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Dashboard Screen</Text>
  </View>
);
}

function DetailsProduct(){
  return(
    <View style = {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Product</Text>
    </View>
  )
}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name = "Home" 
        component={DashboardScreen}
        options={{title: 'Dashboard'}}/>
        <Stack.Screen name = "Details" component={DetailsProduct}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;