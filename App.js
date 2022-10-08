import * as React from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function DashboardScreen({ navigation }){
return (
  <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Dashboard Screen</Text>
    <Button 
    title='Go to Details Product'
    onPress={() => navigation.navigate('Details')}
    />
  </View>
);
}

function DetailsProduct({navigation}){
  return(
    <View style = {{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Product</Text>
      <Button
      title='Go to Details... again'
      onPress={() => navigation.push('Home')}
      />
    
    </View>
  )
}


function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name = "Home">
          {(props) => <DashboardScreen {...props} extraData = {dummyData}/>}
          </Stack.Screen> 
        {/* component={DashboardScreen} */}
        {/* options={{title: 'Dashboard'}}/> */}
        <Stack.Screen name = "Details" component={DetailsProduct}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function dummyData(){
  <Text> Passing additional props​ </Text>
}

export default App;