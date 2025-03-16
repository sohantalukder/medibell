import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import Header from '@components/header/Header.component';
import {useTheme} from '@react-navigation/native';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import {Colors} from '@styles/colors.style.asset';
import CustomInput from '@components/text-input/CustomInput.c';
import rs from '@styles/responsiveSize.style.asset';
import Button from '@components/button/button/Button.component';
import {typographies} from '@styles/typographies.style.asset';
import HowOften from './components/HowOften';
import HowLong from './components/HowLong';
import DateInput from '@components/date-time/date-input/DateInput.component';
import TimeInput from '@components/date-time/time-input/TimeInput.component';
import NotificationIcon from '@icons/Notification.icon';
import CustomSwitch from '@components/switch/CustomSwitch';
import RepeatIcon from '@icons/Repeat.icon';
import AlarmIcon from '@icons/Alarm.icon';

const AddMedicine = () => {
  const colors = useTheme().colors as Colors;
  return (
    <Container statusBarBg={colors.primary}>
      <Header
        text="Add Medicine"
        showLeft={false}
        rightComponent={
          <Button
            text="Save"
            onPress={() => {}}
            wrapStyle={{
              borderRadius: rs(200),
              height: rs(30),
              width: rs(80),
              backgroundColor: colors.white,
            }}
            textStyle={[
              typographies(colors).bodyMediumSemibold,
              {color: colors.black, letterSpacing: rs(0)},
            ]}
          />
        }
        style={{
          backgroundColor: colors.primary,
          ...customPadding(10, 20, 20, 20),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          ...customPadding(20, 20, 20, 20),
          gap: rs(20),
        }}>
        <CustomInput
          onChangeText={() => {}}
          label="Medicine Name"
          placeholder="Enter Medicine Name"
        />
        <CustomInput
          onChangeText={() => {}}
          label="Dosage"
          placeholder="e.g 500mg"
        />

        <HowOften />
        <HowLong />
        <DateInput onChange={() => {}} label="Start Time" />
        <TimeInput onChange={() => {}} label="Medicine Time" />
        <View
          style={[
            globalStyles.flexRow,
            {
              ...customPadding(10, 10, 10, 10),
              borderRadius: rs(16),
              backgroundColor: colors.default,
              borderWidth: rs(1.1),
              borderColor: colors.gray3,
            },
            globalStyles.widthFull,
          ]}>
          <View style={[globalStyles.flexRow, globalStyles.flexShrink1]}>
            <NotificationIcon />
            <View
              style={[
                {gap: rs(5)},
                globalStyles.flexGrow1,
                globalStyles.flexShrink1,
              ]}>
              <Text style={[typographies(colors).bodyLargeSemibold]}>
                Notification Reminder
              </Text>
              <Text style={[typographies(colors).bodySmallMedium]}>
                You will receive a notification when the medicine is due to be
                taken
              </Text>
            </View>
          </View>
          <CustomSwitch />
        </View>
        <View
          style={[
            globalStyles.flexRow,
            {
              ...customPadding(10, 10, 10, 10),
              borderRadius: rs(16),
              backgroundColor: colors.default,
              borderWidth: rs(1.1),
              borderColor: colors.gray3,
            },
            globalStyles.widthFull,
          ]}>
          <View
            style={[
              globalStyles.flexRow,
              globalStyles.flexGrow1,
              globalStyles.flexShrink1,
            ]}>
            <AlarmIcon />
            <View style={[globalStyles.flexShrink1]}>
              <Text style={[typographies(colors).bodyLargeSemibold]}>
                Alarm Reminder
              </Text>
              <Text style={[typographies(colors).bodySmallMedium]}>
                You will receive a alarm when the medicine is due to be taken
              </Text>
            </View>
          </View>
          <CustomSwitch />
        </View>
        <View
          style={[
            globalStyles.flexRow,
            {
              ...customPadding(10, 10, 10, 10),
              borderRadius: rs(16),
              backgroundColor: colors.default,
              borderWidth: rs(1.1),
              borderColor: colors.gray3,
            },
          ]}>
          <View
            style={[
              globalStyles.flexRow,
              globalStyles.flexGrow1,
              globalStyles.flexShrink1,
            ]}>
            <RepeatIcon />
            <View style={[globalStyles.flexShrink1]}>
              <Text style={[typographies(colors).bodyLargeSemibold]}>
                Refill Tracker
              </Text>
              <Text style={[typographies(colors).bodySmallMedium]}>
                You will receive a notification when the medicine is due to be
              </Text>
            </View>
          </View>
          <CustomSwitch />
        </View>
      </ScrollView>
    </Container>
  );
};

export default AddMedicine;
