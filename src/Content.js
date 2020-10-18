import React from 'react';
import { Text, ScrollView, StyleSheet} from 'react-native'
import Item from './Item'

export default Content = ({tasks, removeTask})=> <ScrollView style={styles.style}>
  {tasks.map(task=><Item key={task.id} task={task} removeTask={removeTask} />)}
  {tasks.length===0 && <Text style={styles.no}>No tasks</Text>}
</ScrollView>

const styles = StyleSheet.create({
  style: { 
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 3,
    backgroundColor: '#e0e0e0',
    borderRadius: 2
  },
  no: {
    alignSelf: 'center',
    color: '#aeaeae'
  }
})