import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default class Item extends React.Component {
  render = () => {
    const { task, removeTask } = this.props

    return <View style={styles.item}>
      <View>
        <Text style={styles.itemText}>
          {task.title}
        </Text>
      </View>
      <View>
        {<AntDesign name="minuscircle" size={30} color="#ff6e40" onPress={() => removeTask(task.id)} />}
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    margin: 3,
    paddingVertical: 3,
    paddingHorizontal: 7,
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 13,
    backgroundColor: '#388e3c',
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto',
    paddingLeft: 7
  }
})