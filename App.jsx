/**
 * My To Do List App
 *
 * @format
 */
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,

} from 'react-native';

import { useState } from 'react';

 

export default function App() {

 



  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
  const deleteTask = (index) => {
   const updatedTasks = tasks.filter((_, i) => i !== index);
   setTasks(updatedTasks);
  }

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} deleteTask={deleteTask}/>
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },

});