import { View, Text, StyleSheet } from "react-native";

type Props = {
  value: string 
}

export default function GoalItem(props: Props) {
  return (
    <View>
      <Text style={styles.listItem}>{props.value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderColor: '#000',
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
  }
});
