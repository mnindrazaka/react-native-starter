import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';
import DetailsProduct from '../screens/DetailScreen/DetailScreen';
import DashboardScreen from '../screens/HomeSreen/Home';
import CreatePostScreen from '../screens/PostScreen/PostScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
          name = "Home"
          
          component={DashboardScreen}
          options={{title: 'Dashboard'}}/>
          <Stack.Screen name = "Details" component={DetailsProduct}/>
          <Stack.Screen name = "CreatePost" component={CreatePostScreen}/>
          <Stack.Screen name="Profile" component={ProfileScreen}
  
          options={({ route }) => ({title: route.params.name, headerStyle: {
            backgroundColor: '#f194ff'},
          headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight:'bold'
        },
        headerRight: ()=>(
          <Button
          onPress={() => alert('ini button')}
          title="info"
          color="#f194ff"
          />
        )
      })}
      />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


  const Stack = createNativeStackNavigator();

  export default App;