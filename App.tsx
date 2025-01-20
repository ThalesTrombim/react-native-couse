import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState<string>('');
  const [goalsList, setGoalsList] = useState<{ key: string, value: string } []>([]);

  function goalInputHandler(enteredGoal: string) {
    setEnteredGoal(enteredGoal);
  }
 
  function addGoalHandler(goal: string) {
    setGoalsList((prevGoals) => [...prevGoals, { key: Math.random().toString(), value: goal }]);
    // setEnteredGoal('');
  }
  
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
        data={goalsList}
        keyExtractor={(item) => item.key}
        renderItem={goalItem => (
          <GoalItem value={goalItem.item.value} />  
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
  },
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
