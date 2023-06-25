import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const EditServiceScreen = () => {
  const [serviceName, setServiceName] = useState('');
  const [currency, setCurrency] = useState('');
  const [status, setStatus] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [cancellationFee, setCancellationFee] = useState('');
  const [description, setDescription] = useState('');

  const handleEdit = () => {
    // Handle the edit functionality
  };

  const handleCancel = () => {
    // Handle the cancel functionality
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Service</Text>

      <Text style={styles.label}>Service Name</Text>
      <TextInput
        style={styles.input}
        value={serviceName}
        onChangeText={setServiceName}
      />

      <Text style={styles.label}>Currency</Text>
      <TextInput
        style={styles.input}
        value={currency}
        onChangeText={setCurrency}
      />

      <Text style={styles.label}>Status</Text>
      <TextInput
        style={styles.input}
        value={status}
        onChangeText={setStatus}
      />

      <Text style={styles.label}>Duration</Text>
      <TextInput
        style={styles.input}
        value={duration}
        onChangeText={setDuration}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.label}>Cancellation Fee</Text>
      <TextInput
        style={styles.input}
        value={cancellationFee}
        onChangeText={setCancellationFee}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  editButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  cancelButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
};

export default EditServiceScreen;
