import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function GoalInput({ onAddGoal }: { onAddGoal: (goal: string) => void }) {
  const [enteredGoal, setEnteredGoal] = useState<string>('');
  
  function goalInputHandler(enteredGoal: string) {
    setEnteredGoal(enteredGoal);
  }
  
  return (
    <View style={styles.inputArea}>
      <TextInput placeholder='Course Goal' style={styles.textInput} value={enteredGoal} onChangeText={goalInputHandler} />
      <Button title='Add' onPress={() => onAddGoal(enteredGoal)} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10, 
    width: '80%',
  },
});
