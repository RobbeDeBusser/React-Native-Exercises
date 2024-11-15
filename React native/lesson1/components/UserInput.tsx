import { StyleSheet, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export default function UserInput() {
  const [person, setPerson] = useState({ firstname: '', zipcode: '' });

  // const [firstname, setFirstname] = useState('');
  // const [zipcode, setZipcode] = useState('');

  function handleOnPress() {
    alert('Hello ' + person.firstname + ' ' + person.zipcode);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter your firstname'
        onChangeText={(text) => setPerson({...person, firstname: text})}
        style={styles.input}
        value={person.firstname}
      />
      <TextInput
        placeholder='Enter your zipcode'
        onChangeText={(text)=> setPerson({...person, zipcode: text})}
        style={styles.input}
        value={person.zipcode}
      />
      <Button
        title="Show"
        onPress={handleOnPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "flex-start"
  },
  input: {
    marginBottom: 15,
    borderWidth: 0.5,
    padding: 10,
  },
});