import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
  },
  input: {
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    width: '70%'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    marginTop: 48,
    marginBottom: 42,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 8
  },
  listEmptyText: {
    alignItems: 'center'
  },
  logo: {
    alignSelf: 'center',
    height: 32,
    width: 110,
    marginTop: 48
  },
  plusIcon: {
    height: 15, width: 15
  },
  headerContainer: {
    position: 'absolute',
    backgroundColor: 'black',
    height: 153,
    width: '100%',
    marginBottom: -40
  },
  listEmptySubtitle: {
    color: "#808080",
    fontSize: 14
  },
  listEmptyTitle: {
    marginTop: 16,
    color: "#808080",
    fontWeight: 'bold',
    fontSize: 14
  },
  countContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between'
  },
  divider: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    height: 1,
    marginHorizontal: 24,
    marginTop: 20,
    marginBottom: 48
  }
})