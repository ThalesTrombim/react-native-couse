import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  value: string;
  onDelete: () => void;
}

export default function GoalItem(props: Props) {
  return (
    <TouchableOpacity activeOpacity={.9} onPress={props.onDelete}>
      <View>
        <Text style={styles.listItem}>{props.value}</Text>
      </View>
    </TouchableOpacity>
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
