/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchID from 'react-native-touch-id'
import {range} from 'lodash';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
LocaleConfig.locales['vn'] = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12'
  ],
  monthNamesShort: [
    'Thg1',
    'Thg2',
    'Thg3',
    'Thg4',
    'Thg5',
    'Thg6',
    'Thg7',
    'Thg8',
    'Thg9',
    'Thg10',
    'Thg11',
    'Thg12'
  ],
  dayNames: [
    'Chủ nhật',
    'Thứ 2',
    'Thứ 3',
    'Thứ 4',
    'Thứ 5',
    'Thứ 6',
    'Thứ 7'
  ],
  dayNamesShort: [
    'CN',
    'T2',
    'T3',
    'T4',
    'T5',
    'T6',
    'T7'
  ]
};

LocaleConfig.defaultLocale = 'vn';

const optionalConfigObject = {
  title: "Authentication Required", // Android
  color: "#e00606", // Android
  sensorDescription: "Touch sensor", // Android
  cancelText: "Cancel", // Android
  fallbackLabel: "Show Passcode", // iOS (if empty, then label is hidden)
  unifiedErrors: false // use unified error messages (default false)
}

export default class App extends Component<Props> {
  _onPressButton() {
    TouchID.authenticate('to demo this react-native component', optionalConfigObject).then(success => {
      Alert.alert('Authenticated Successfully');
    }).catch(error => {
      Alert.alert('Authentication Failed');
    });
  }
  render() {
    return (<View>

      <Text style={{
          fontSize: 20,
          textAlign: 'center',
          padding: 10
        }}>
        Lịch Trình</Text>

      <Calendar horizontal={true}
        // Enable paging on horizontal, default = false
        pagingEnabled={true}
        // Set custom calendarWidth.
        calendarWidth={320}

        // Initially visible month. Default = Date()

        //current={'2012-03-01'}

        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined

        //minDate={'2012-05-10'}

        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2019-05-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          Alert.alert('selected day', JSON.stringify(day))
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          console.log('selected day', day)
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MM/yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          console.log('month changed', month)
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')

        // renderArrow={(direction) => (<Arrow />)}

        // Do not show days of other months in month page. Default = false
        hideExtraDays={false}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out

        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month

        // onPressArrowLeft={substractMonth => substractMonth()}

        // Handler which gets executed when press arrow icon left. It receive a callback can go next month

        // onPressArrowRight={addMonth => addMonth()}
        markedDates={{
          '2018-08-31' : {
            color: 'green',
            textColor: '#fff',
            text: "Book"
          },
          '2018-10-16' : {
            color: 'pink',
            textColor: '#fff',
            text: "complete"
          },
          '2018-10-17' : {
            color: 'pink',
            text: "abc",
            marked: true,
          },
          '2018-10-18' : {
            marked: true,
              color: 'orange',
              text: "cde",
              textColor: '#000',
            activeOpacity: 0
          },
          '2018-10-19' : {
            disabled: true,
            disableTouchEvent: true
          }
        }}
        markingType={'period'}

        dayComponent={({date, state, marking}) => {
          return (<TouchableOpacity onPress={()=> Alert.alert('Ngày bạn chọn', JSON.stringify(date))} style={{
              flex: 1,
              padding:1,
              margin: 0,
              zIndex: state === 'disabled' ? -1 : 1
            }}>
            <View style={{  borderWidth: state === 'disabled' ? 0 : 1, borderColor: '#ccc', height: 50, backgroundColor: state === 'disabled' ?'#fff' : marking.color, borderRadius: 3}}>
            <Text style={{
              margin: 0,
              padding: 0,
               marginTop: 4,
              fontSize: 16,
                textAlign: 'center',
                color: state === 'disabled'
                  ? '#ccc'
                  : 'black'
              }}>
              {date.day}
            </Text>
            <Text style={{fontSize: 12, marginTop:0, padding: 0, textAlign: 'center', color: '#fff'}}>{marking.text}</Text>
            </View>
          </TouchableOpacity>);

        }} theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          monthTextColor: 'blue',
          textDayMarginBottom: 20,
          dayHeight: 50,
          // textDayFontFamily: 'monospace',
          // textMonthFontFamily: 'monospace',
          // textDayHeaderFontFamily: 'monospace',
          textMonthFontWeight: 'bold',
          textDayFontSize: 17,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 20,
          'stylesheet.calendar.header' : {
            week: {
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }
          }
        }}/>
    </View>);
  }
}
