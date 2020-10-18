import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Content from './src/Content'
import Navbar from './src/Navbar'

export default App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = title => {
    setTasks(prev=>[
      {
        id: Date.now().toString(),
        title
      },
      ...prev,
    ])
  }

  const removeTask = taksID => {
    setTasks(prev=>prev.filter(task=>task.id!==taksID))
  }

  return <View style={styles.container}>
    <Navbar addTask={addTask} />
    <Content tasks={tasks} removeTask={removeTask}/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30
  }
});
