import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NameTitle = ({ name, joined }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.joined}>Joined {joined}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start', // Align items to the left
    marginTop: 10, // Add space between the avatar and the text
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  joined: {
    fontSize: 14,
    color: 'gray',
  },
});

export default NameTitle;
