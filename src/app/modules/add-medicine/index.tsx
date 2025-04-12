import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
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
import {statusBar} from '@styles/properties.asset';
import RippleButton from '@components/button/ripple/CustomRipple.c';
import useGetMedicine from './hooks/useGetMedicine.hook';
import {debounceHandler} from '@helper/hooks/debounce.hook';
import {IMedicine} from './interface/interface';
const MedicineName = () => {
  const colors = useTheme().colors as Colors;
  const [medicine, setMedicine] = useState('');
  const {mutate: getMedicine, data} = useGetMedicine();
  const handleDebounce = debounceHandler(
    (...args: unknown[]) => getMedicine({search: args[0] as string}),
    500,
  );
  const medicineList = data?.body || [];
  return (
    <>
      <CustomInput
        onChangeText={handleDebounce}
        label="Medicine Name"
        placeholder="Enter Medicine Name"
        defaultValue={medicine}
      />
      {medicineList.length > 0 && (
        <View style={styles(colors).listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            style={{
              ...customPadding(16, 16, 16, 16),
              gap: rs(10),
            }}
            data={medicineList as IMedicine[]}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => (
              <RippleButton
                onPress={() => {
                  setMedicine(item.brandName);
                }}>
                <View>
                  <Text style={{...typographies(colors).bodyMediumSemibold}}>
                    {item.brandName} - {item.strength}
                  </Text>
                </View>
              </RippleButton>
            )}
          />
        </View>
      )}
    </>
  );
};
const AddMedicine = () => {
  const colors = useTheme().colors as Colors;
  return (
    <Container
      statusBarBg={colors.primary}
      statusBarStyle={statusBar.lightContent}>
      <Header
        text="Add Medicine"
        textStyle={{color: colors.white}}
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
        <MedicineName />
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

const styles = (colors: Colors) =>
  StyleSheet.create({
    listContainer: {
      position: 'absolute',
      top: 100,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      gap: rs(10),
      maxHeight: rs(200),
      marginHorizontal: rs(20),
      backgroundColor: colors.white,
      borderRadius: rs(16),
    },
  });
