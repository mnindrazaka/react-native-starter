import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';



const Separator = () => (
    <View style={style.separator}/>
  );


function DashboardScreen({ navigation, route }){
    React.useEffect(() => {
      if (route.params?.post){
  
      }
    }, [route.params?.post]);
  
  return (
    <SafeAreaView style={style.container}>
    <View>
  
      
      <Text style={style.title}>
        kali ini belajar bagaimana menggunakan navigator .
         klik tombol dibawah untuk pindah ke halaman detail produk.
      </Text>
  
      <Button 
      title='Go to Details Product'
      onPress={() => navigation.navigate('Details',{itemId:86,
      otherParam: 'Data ini diperoleh dari dashboard layer',})}
      />
  
  <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
  
  <Separator/>
      <Button
    
       title='Create Post'
        onPress = {()=> navigation.navigate('CreatePost')}
        color="#f194ff"
        />
      
    </View>
  
  <Separator/>
        <Button
        title='Profile'
        onPress={() => navigation.navigate('Profile', {name: 'Custom profile header'})}
        />
    </SafeAreaView>
  );
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
  
  export default DashboardScreen;