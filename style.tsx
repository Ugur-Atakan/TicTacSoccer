import { StyleSheet,Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

const cellSize = width * 0.244;

const globalStlyes = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#303F9F',
    },
    header: {
      flex: 0.25,
      backgroundColor: 'rgba(255,255,255,0.2)',
      justifyContent: 'center',
    },
    gameStatus: {
      marginTop: 15,
      justifyContent: 'flex-end',
      alignItems: 'stretch',
      marginLeft: 0,
    },
    game: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    bottomButtons: {
      flex: 0.3,
      justifyContent: 'center',
  
    },
    footer: {
      flex: 0.5,
      backgroundColor: 'rgba(255,255,255,0.3)',
      maxHeight: height * 0.1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  

const layoutStyles=StyleSheet.create({

})

const buttonStyles=StyleSheet.create({

})

const ViewStyles=StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'space-around',
        backgroundColor: '#448AFF',
        width: width * 0.3,
        height: width * 0.1,
      },
    
      playerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      playerBadge: {
        backgroundColor: 'blue',
        borderRadius: 50,
        width: width * 0.1,
        height: width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
      },
    
      scoreText: {
        fontSize: width * 0.05,
        marginHorizontal: 5,
        fontWeight: 'bold',
        color: '#fff',
      },
      scoreSeparator: {
        paddingHorizontal: width * 0.03,
      },
      scoreSeparatorText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#fff',
      },
    greencircle:{
        backgroundColor:'#4CAF50',
        borderRadius: 50,
        width: width * 0.1,
        height: width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      redcircle:{
        backgroundColor:'#FF4081',
        borderRadius: 50,
        width: width * 0.1,
        height: width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
      }, 

})

const textStyles=StyleSheet.create({
    fs15: {
        fontSize: 15,
        color: '#fff',
      },
      fs15white: {
        fontSize: 15,
        color: 'white',
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
        color: 'black',
      },
      fs40: {
        fontSize: 40,
      },
      fs50: {
        fontSize: 50,
      },
      fs50bold: {
        fontSize: 50,
        fontWeight:'bold',
      },
      fs56: {
        fontSize: 56,
      },
      fs60: {
        fontSize: 60,
      },
})

const imageStyles=StyleSheet.create({

    logoimg:{
        width: 55,
        height: 55,
        tintColor: 'white'
    },

})
const selectSoccerInputStyles=StyleSheet.create({
textInput:{
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 10,
},
   soccerList:{
    width: 300,
    height: 300,
    minHeight: 100,
    maxHeight: 300,
}

})

const cellStyles=StyleSheet.create({

    cell:{
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 0.5,

    },
    border:{
        borderColor:'red',
        borderTopWidth:2,
        borderBottomWidth:2,
        borderRightWidth:2,
        borderLeftWidth:2,
      },

    teamcells: 
  {
        backgroundColor: '#384bb5',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 0.5,
      },
    
      soccercells: {
        backgroundColor: '#3F51B5',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 0.5,
      },
})

const modalStyles=StyleSheet.create({
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
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})

export {
    globalStlyes,
    layoutStyles,
    buttonStyles,
    ViewStyles,
    textStyles,
    imageStyles,
    cellStyles,
    modalStyles,
    width,
    height,
    cellSize,
    selectSoccerInputStyles,
    
}