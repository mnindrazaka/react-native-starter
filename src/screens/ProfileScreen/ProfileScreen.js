
import * as React from 'react';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';

function ProfileScreen({navigation}){
    return (
     
      <View>
      <Text style={style.title}>
        Custom Header 
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      )
  }


const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      fontSize: 20
    }, fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 10,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
  
  

  export default ProfileScreen;