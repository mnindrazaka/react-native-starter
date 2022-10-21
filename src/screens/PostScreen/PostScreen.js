import * as React from 'react';

import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextInput } from 'react-native';


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
  export default CreatePostScreen;