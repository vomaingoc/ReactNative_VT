import {Platform, Dimensions, StyleSheet} from "react-native";
const win = Dimensions.get("window");

export default StyleSheet.create({
  //modal
  modal__bg: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  modal__bg_nopad: {
    padding: 0,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  modal_header_page: {
    paddingLeft: 0,
    flexDirection: "row",
    backgroundColor: globals.color.darkblue,
    paddingBottom: Platform.OS === 'ios'
      ? 12
      : 16,
    paddingTop: Platform.OS === 'ios'
      ? 36
      : 16
  },
  buton_back_header: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingLeft: Platform.OS === 'ios'
      ? 10
      : 20,
    paddingRight: 20,
    height: Platform.OS === 'ios'
      ? 45
      : 50,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3
  },
  modal_header_tilte: {
    color: "#fff",
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: globals.fontSize.headerTitle,
    flex: 1
  },

  icon_back_header: {
    color: "white",
    fontSize: Platform.OS === 'ios'
      ? 34
      : 23
  }
})
