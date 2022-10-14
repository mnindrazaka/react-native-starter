import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';


const Stack = createNativeStackNavigator();

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
  </SafeAreaView>
);
}

function CreatePostScreen({navigation, route}){
  const [postText, setPostText] =React.useState('');

  return(
    <>
    <TextInput
    multiline
    placeholder='Apa yang anda pikirkan?'
    style = {{ height: 200, padding:10, backgroundColor:'white'}}
    value={postText}
    onChangeText={setPostText}
    />

    <Button
    title='Done'
    onPress={()=>{
      navigation.navigate({
        name: 'Home',
        params: {post:postText},
        merge: true,
      });
    }}
    />
    </>
  );
}

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
        <Stack.Screen name = "CreatePost" component={CreatePostScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function dummyData(){
  <Text> Passing additional props​ </Text>
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


export default App;
