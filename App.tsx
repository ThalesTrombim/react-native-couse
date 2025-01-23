import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goalsList, setGoalsList] = useState<{ id: string, value: string } []>([]);
  const [isAddMode, setIsAddMode ] = useState<boolean>(false);

  function addGoalHandler(goal: string) {
    setGoalsList((prevGoals) => [...prevGoals, { id: Math.random().toString(), value: goal }]);
    setIsAddMode(false);
  }

  function removeGoal(goalId: string) {
    setGoalsList((prevGoals) =>  {
     return prevGoals.filter((goal) => goal.id !== goalId)
    })
  }
  
  return (
    <View style={styles.container}>
      <Button title='Add Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput isVisible={isAddMode} onAddGoal={addGoalHandler} onCancel={() => setIsAddMode(false)} />
      <FlatList 
        data={goalsList}
        keyExtractor={(item) => item.id}
        renderItem={goalItem => (
          <GoalItem value={goalItem.item.value} onDelete={() => removeGoal(goalItem.item.id)}/>  
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
