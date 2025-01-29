import { View, Text, Button } from 'react-native'
import React from 'react'
import emailjs from '@emailjs/react-native';



const Home = ({ route, navigation }) => {
  let params = route.params;

  const handleEmail = () => {
    const templateParams = {
      from_name: 'James',
      inquiry_type: 'Check this out!',
    };

    emailjs
      .send('', '', templateParams, {
        publicKey: '',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hellow :  {params?.name}</Text>
      <Text>Hey, this is shivam anand</Text>
      <Button title="Send Mail" onPress={handleEmail} />

    </View>
  )
}

export default Home