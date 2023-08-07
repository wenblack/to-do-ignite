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
    marginBottom:8
  },
  textTaskCreated: {
    fontSize: 14,
    color: "#F2F2F2",
    width:'90%',
    paddingVertical:18,
  },
  textTaskCompleted: {
    fontSize: 14,
    color: "#808080",
    paddingVertical:18,
    textDecorationLine:'line-through',
    width:'90%',
    textDecorationColor: "#808080",
  },imgCheckBox:{
    height:24,
    width:24
  },imgTrashIcon:{
    height:32,
    width:32
  }
})
