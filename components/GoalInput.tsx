import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

export default function GoalInput({ isVisible, onAddGoal, onCancel }: { isVisible: boolean, onAddGoal: (goal: string) => void, onCancel: () => void } ) {
  const [enteredGoal, setEnteredGoal] = useState<string>('');
  
  function goalInputHandler(enteredGoal: string) {
    setEnteredGoal(enteredGoal);
  }

  function addGoalHandler () {
    onAddGoal(enteredGoal)
  }

  function cancelGoalAdditionHandler () {
    onCancel()
  }
  
  return (
    <Modal visible={isVisible} animationType='slide'>
      <View style={styles.inputArea}>
        <TextInput placeholder='Course Goal' style={styles.textInput} value={enteredGoal} onChangeText={goalInputHandler} />
        <View style={styles.buttonsArea}>
          <View style={styles.button}>
            <Button title='Cancel' color='red' onPress={cancelGoalAdditionHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Add' onPress={addGoalHandler} />
          </View> 
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10, 
    width: '80%',
    marginBottom:  10
  },
  buttonsArea: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '40%'
  }
});
