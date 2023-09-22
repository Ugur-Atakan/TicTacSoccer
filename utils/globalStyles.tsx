import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cells: {
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },
  f1: {
    flex: 1,
  },
  f9: {
    flex: 9,
  },
  fs15: {
    fontSize: 15,
  },
  fs10: {
    fontSize: 10,
  },

  fs30: {
    fontSize: 30,
  },
  fs30bold: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  fs40: {
    fontSize: 40,
  },
  fs50: {
    fontSize: 50,
  },
  fs56: {
    fontSize: 56,
  },
  fs60: {
    fontSize: 60,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    position: 'relative',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'lightgreen',
  },
  buttonClose: {
    backgroundColor: 'lightgreen',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalExit: {
    position: 'absolute',
    top: 0, // İstediğiniz yüksekliği ayarlayabilirsiniz
    right: 0, // İstediğiniz sağ boşluğu ayarlayabilirsiniz
    borderStyle: 'solid',
    backgroundColor: 'lightgray',
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalExitText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GlobalStyles;
