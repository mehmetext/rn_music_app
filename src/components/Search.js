import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export default function Search({searching, handleChange}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        value={searching}
        onChangeText={text => {
          handleChange(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    backgroundColor: '#efefef',
    padding: 10,
    borderRadius: 6,
  },
});
