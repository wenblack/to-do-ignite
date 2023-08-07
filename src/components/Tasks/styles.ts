import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    marginHorizontal: 24,
    paddingHorizontal:8,
    gap: 6,
    alignItems:'center',
    borderRadius:10,
    marginBottom:8,
    justifyContent:'space-between'
  },
  textTaskCreated: {
    fontSize: 14,
    color: "#F2F2F2",
    paddingVertical:18,
  },
  textTaskCompleted: {
    fontSize: 14,
    color: "#808080",
    paddingVertical:18,
    textDecorationLine:'line-through',
    textDecorationColor: "#808080",
  },imgCheckBox:{
    height:24,
    width:24
  },imgTrashIcon:{
    height:32,
    width:32
  }
})
