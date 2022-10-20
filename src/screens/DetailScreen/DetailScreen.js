import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';



const Separator = () => (
    <View style={style.separator}/>
  );


function DetailsProduct({route, navigation}){

    const {itemId, otherParam} = route.params;
  
    return (
    <SafeAreaView style={style.container}>
    <View>
      
      <Text style={style.title}>
        Klik menu dibawah untuk melakukan pindah layer / class ke Detail Produk.
      </Text>
  
      <Text style= {style.title}>
        itemId: {JSON.stringify(itemId)}
      </Text>
  
      <Text style = {style.title}>
        otherParam: {JSON.stringify(otherParam)}
      </Text>
  
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {
          itemId:Math.floor(Math.random()*100),
        })
      }
      />
    </View>
    <Separator />
    <View>
      <Text style={style.title}>
      Klik menu dibawah ini untuk melakukan pindah layer / class ke Halaman Utama.
      </Text>
      <Button
        title="Go to Dashboard"
        color="#f194ff"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  
    <Separator />
    <View>
      <Text style={style.title}>
      Go Back.
      </Text>
      <Button
        title="Go Back"
        color="#f194ff"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
    <Separator />
  
  
    <View>
      <Text style={style.title}>
      Klik menu dibawah ini untuk melakukan pindah layer / class ke Halaman Utama.
      </Text>
      <Button
        title="Go back to first screen in stack"
        color="#f194ff"
        onPress={() => navigation.popToTop()}
      />
    </View>
    <Separator />
  
    <View>
      <Text style={style.title}>
       Disable 
      </Text>
      <Button
        title="Saya tidak bisa di pencet"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
  
  
    <View>
      <Text style={style.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
     
      <View style={style.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
         
        />
      </View>
    </View>
  
  </SafeAreaView>
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


  export default DetailsProduct;