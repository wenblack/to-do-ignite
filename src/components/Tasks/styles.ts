import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    marginHorizontal: 24,
    gap: 6
  },
  textTaskCreated: {
    fontSize: 14,
    color: "#F2F2F2"
  },
  textTaskCompleted: {
    fontSize: 14,
    color: "#808080",
    textDecorationStyle: 'dashed'
  }
})
