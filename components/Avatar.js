import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Avatar = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://i.postimg.cc/Bnx9r1CZ/avatar.png' }} // New Image URL
        accessible={true} // For accessibility
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Center the avatar
    marginBottom: 15, // Add margin if needed
  },
  avatar: {
    width: 100, // Set the width of the image
    height: 100, // Set the height of the image
    borderRadius: 50, // Makes the image circular
  },
});

export default Avatar;
