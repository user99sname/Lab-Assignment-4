import { useState } from 'react';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';


export default function ToDoForm({ addTask }) {

    const [taskText, setTaskText] = React.useState('');



    const handleAddTask = () => {
        if (taskText.trim() !== '') { // Check if the task content is not empty or whitespace
            addTask(taskText);
            setTaskText(''); // Clear the input field after adding the task
        }
    };
    return (
        <SafeAreaView>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task..."
                    onChangeText={(text) => setTaskText(text)}
                    value={taskText}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleAddTask}
                >
                    <Text style={styles.buttonText}>Add Task</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({



    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
       
    },
    button: {
        backgroundColor: '#256EE8', // Set the background color
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderRadius: 33,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        
    },

});