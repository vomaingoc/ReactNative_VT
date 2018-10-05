import {Platform, Dimensions, StyleSheet} from "react-native";
const win = Dimensions.get("window");
import variables from "./variables";

export default StyleSheet.create({
  // item__01:{
  //   width: win.width,
  //   paddingTop: Platform.OS === 'ios'
  //     ? 36
  //     : 16,
  // }
  //tabBar navigate
  footerTab: {
    backgroundColor: "#fff"
  },
  tabIcon: {
    width: 24,
    height: 24
  },

  tabBar: {
    borderWidth: 0,
    backgroundColor: "white",
    height: HEIGHT_TAB_NAV,
    paddingLeft: 0,
    paddingRight: 0
  },

  labelTabBar: {
    fontSize: 9,
    marginTop: 2, // <- This is the guilty one in my case, simply removed it and it worked as expected on iOS 10 & 11
    marginBottom: 2,
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginRight: 0
    //  color: variables.color.tabNav
  },

  tabBarActiveTextColor: {
    color: "red"
  },
  tab_item: {
    backgroundColor: "white"
  },
  tab_text: {
    color: variables.color.tabs,
    fontSize: variables.fontSize.tabs,
    fontWeight: "400"
  },
  indicatorTabBar: {
    backgroundColor: variables.color.darkblue,
    position: "absolute",
    top: 0,
    height: HEIGHT_TAB_NAV
  },
  tabBarSelectedItemStyle: {
    color: "white"
  },
});
