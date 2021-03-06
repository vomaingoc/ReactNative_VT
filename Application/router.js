import React, { Component } from "react";
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from "react-navigation";



import variables  from "./src/styles/variables";
import styles     from "./src/styles/styles";

import DrawerScreen   from "./src/screens/DrawerScreen";
import TabScreen   from "./src/screens/TabScreen";
import Calendar   from "./src/screens/Calendar";

const MenuRightStack = StackNavigator(
  {
    // ChangePassword: {
    //   screen: ChangePassword,
    //   navigationOptions: {
    //     title: "Thay đổi mật khẩu"
    //   }
    // },

  },
  {
    navigationOptions: {
      headerBackTitle: null,
      headerLeft: null,
      headerStyle: {
      //  backgroundColor: variables.color.darkblue,
        alignItems: "center",
        textAlign: 'center'
      },
      //headerTintColor: variables.color.headerTitle,
      headerTitleStyle: {
        flex: 1,
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center",
      //  fontSize: variables.fontSize.headerTitle
      }
    }
  }
);

export const RootTab = TabNavigator(
  {
    Calendar: {
      screen: Calendar,
      navigationOptions: {
        title: "Calendar",
        tabBarLabel: "Calendar",
      }
    },
    // ChuyenHang: {
    //   screen: ChuyenHang,
    //   navigationOptions: {
    //     title: "Danh sách chuyến hàng",
    //   }
    // },


  },
  {
    navigationOptions: {
    //activeTintColor: variables.color.tabNavActive,
     headerBackImage: null,
     headerBackTitle: null,
     headerLeft: null,
      headerTitleStyle: {
      //  color: variables.color.headerTitle,
        //fontSize: variables.fontSize.headerTitle,
        textAlign: "center",
        alignSelf: "stretch",
        flex: 1,
        alignItems:'center',
        paddingLeft: 0,
        marginLeft: 0
      }
    },
   tabBarPosition: "bottom",
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarComponent: props =>{
      const {navigate, navigationState} = props
      const jumpToIndex = index =>{
        const lastPosition = navigationState.index
        const tab= navigationState.routes[index]
        const tabRoute = tab.routeName
        const firstTab = tab.routes[0].routeName
        lastPosition !== index && navigation.dispatch(pushNavigation(tabRoute))
        lastPosition === index && navigation.dispatch(resetNavigation(firstTab))
      }
      return  <TabScreen {...props} jumpToIndex={jumpToIndex} />
    },
    tabBarOptions: {
      showIcon: true,
      //iconStyle: styles.icon,
      //style: styles.tabBar,
      upperCaseLabel: false,
      //labelStyle: styles.labelTabBar,
      //indicatorStyle: styles.indicatorTabBar,
      //inactiveTintColor: variables.color.tabNav,
      //activeTintColor: variables.color.tabNavActive,
      //activeBackgroundColor: variables.color.darkblue, //not change on android, only ios
      //tabBarSelectedItemStyle: styles.tabBarSelectedItemStyle
    },
  // initialRouteName: "ChuyenHang"
});

export const IntroStack = StackNavigator({

  // Intro: {
  //   screen: Intro,
  //   navigationOptions: {
  //     header: null
  //   }
  // },


},
{
  navigationOptions: {
    headerBackTitle: null,
    headerStyle: {
      //backgroundColor: variables.color.darkblue,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 0,
      marginLeft: 0
    },
    //headerTintColor: variables.color.headerTitle,
    headerTitleStyle: {
      fontWeight: "bold",
      textAlign: "center",
      alignItems: "center",
      //fontSize: variables.fontSize.headerTitle,
      paddingLeft: 0,
      marginLeft: 0
    }
  },
  initialRouteName: "Intro"
})

export const LoginStack = StackNavigator({


  // Login: {
  //   screen: Login,
  //   navigationOptions: {
  //     header: null
  //   }
  // },

  // ForgotPass: {
  //   screen: ForgotPass,
  //   navigationOptions: {
  //     title: "Nhập mã xác nhận"
  //   }
  // },
},
{
  navigationOptions: {
    headerBackTitle: null,
    headerStyle: {
    //  backgroundColor: variables.color.darkblue,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 0,
      marginLeft: 0
    },
    //headerTintColor: variables.color.headerTitle,
    headerTitleStyle: {
      fontWeight: "bold",
      textAlign: "center",
      alignItems: "center",
      //fontSize: variables.fontSize.headerTitle,
      paddingLeft: 0,
      marginLeft: 0
    }
  },
  initialRouteName: "UserOption"
})
export const RootStack = StackNavigator(
  {

    HomePage: {
      screen: RootTab
    },

    // HangHoaDichVu: {
    //   screen: HangHoaDichVu,
    //   navigationOptions: {
    //     title: "Hàng hóa dịch vụ"
    //   }
    // },



  },
  {
    navigationOptions: {
      headerBackTitle: null,
      headerBackStyle:{
        position: 'absolute'
      },
      headerStyle: {
      //  backgroundColor: variables.color.darkblue,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 0,
        marginLeft: 0,
        flex:1,
      //  width: win.width,
      },
    //  headerTintColor: variables.color.headerTitle,
      headerTitleStyle: {
      //  width: win.width,
        flex:1,
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center",
      //  fontSize: variables.fontSize.headerTitle,
        paddingLeft: 0,
        marginLeft: 0,
      }
    },
    initialRouteName: "HomePage"
  }
);
 export const  HomeDrawer = DrawerNavigator(
  {
    Home: {
      screen: RootStack
    },
  },
  {
    drawerPosition: "right",
    drawerWidth:win.width * (80/100),
    contentComponent: props => <DrawerScreen {...props} />,
    navigationOptions: {
       drawerLockMode: "locked-closed",
    }
  }
);

export default RootDrawer = DrawerNavigator(
 {
   // Test:{
   //   screen: ChuyenHang
   // },

   // Intro:{
   //   screen: IntroStack
   // },
   // LoginStack: {
   //   screen: LoginStack,
   // },
   Home: {
     screen: HomeDrawer
   },
 }
);
