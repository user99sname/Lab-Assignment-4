import { StyleSheet } from "react-native";
import React from 'react';
import { useState } from 'react';
import {
    TouchableOpacity,
    ScrollView,
    Pressable,
    View,
    Text,


} from 'react-native';




export default function ToDoList({ tasks,deleteTask }) {




    return (


        <ScrollView style={styles.body}>
            <Text style={styles.heading}>To Do List</Text>
            {tasks.map((task, index) => (

                <Pressable key={index} onPress={() => deleteTask(index)}>
                    <View style={[styles.task]}>

                        <Text style={styles.taskText}>{task}</Text>
                         

                    </View>
                </Pressable>





            ))}
        </ScrollView>


    )
}




const styles = StyleSheet.create({
    task: {
        padding: 10,


        backgroundColor: '#256EE8',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,

        minHeight: 50,
        marginVertical: 10,

    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
        color: '#fff',
        width: '90%',
        paddingLeft: 20,


    },
    heading: {
        color: '#256EE8',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 20,
    },

    body: {
        marginTop: 50,
    },
    delete: {
        marginLeft: 10,
        color: '#fff',
        
    },


});