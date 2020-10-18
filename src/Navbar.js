import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default Navbar = ({ addTask }) => {
  const [value, setValue] = useState('')

  const onButtonPress = () => {
    if (value.trim() !== '') {
      addTask(value)
      setValue('')
    } else {
      Alert.alert('Warning', 'Task title cannot be empty')
    }
  }

  return <View style={styles.nav} >
    <TextInput
      placeholder='Task title'
      style={styles.InputStyle}
      onChangeText={text => setValue(text)}
      value={value}
    />
    <View style={{ width: '15%' }}>
      <AntDesign
        name="pluscircle"
        size={40} color="#ff6e40"
        onPress={() => onButtonPress()} />
    </View>
  </View>
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  InputStyle: {
    minWidth: '80%',
    borderColor: '#00600f',
    borderWidth: 1,
    borderRadius: 13,
    paddingHorizontal: 13,
    fontSize: 19,
    color: '#6abf69'
  }
})