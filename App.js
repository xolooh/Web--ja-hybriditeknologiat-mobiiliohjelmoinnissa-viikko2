import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.linkText}>Show modal message</Text>
      </Pressable>
      
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text>This is a modal...</Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </Pressable></View></View></Modal></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 50,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});