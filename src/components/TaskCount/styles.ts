import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  createdTask: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#4EA8DE"
  },
  completedTask: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#8284FA"
  },
  count: {
    backgroundColor: "#333333",
    color: '#D9D9D9',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: 'center',
    borderRadius: 10
  }
})