import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import TimeInput from './time-input/TimeInput.component';
import DateInput from './date-input/DateInput.component';
import SolidButton from '../button/button/Button.component';
import {
  customPadding,
  globalStyles,
} from '../../assets/styles/global.style.asset';
import LeftArrowIcon from '../../assets/icons/LeftArrow.icon.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {customTheme} from '../../assets/styles/colors.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import moment from 'moment-timezone';
interface _props {
  onChange: (time: Date) => void;
  defaultValue: Date;
  label: string;
}
const ScheduleOption: React.FC<_props> = ({
  defaultValue = new Date(),
  label,
  onChange,
}) => {
  const [date, setDate] = useState(defaultValue);
  const [time, setTime] = useState(defaultValue);
  const onSelect = () => {
    const dateFromFirst = moment(date).format('YYYY-MM-DD');
    const timeFromSecond = moment(time).format('HH:mm:ss.SSS');
    const combinedDateTimeString = `${dateFromFirst}T${timeFromSecond}Z`;
    onChange(combinedDateTimeString as any);
    global.showBottomSheet({flag: false});
  };
  return (
    <View style={styles.container}>
      <View style={[globalStyles.flexRow, {marginBottom: rs(15)}]}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            global.showBottomSheet({flag: false});
          }}>
          <LeftArrowIcon />
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          style={[
            typographies.interSemiBold16,
            {color: customTheme.colors.black},
            globalStyles.flexShrink1,
          ]}>
          {label}
        </Text>
      </View>
      <DateInput
        defaultValue={date}
        label={'Select Date'}
        placeholder={'MM-DD-YYYY'}
        onChange={value => {
          setDate(value);
        }}
        minimumDate={new Date()}
        style={{marginBottom: rs(10)}}
      />
      <TimeInput
        defaultValue={time}
        label={'Select Time'}
        placeholder={'hh:mm A'}
        onChange={value => {
          setTime(value);
        }}
      />
      <View style={styles.footer}>
        <Text style={styles.timeText} />
        <SolidButton
          text={'Select'}
          onPress={() => {
            onSelect();
          }}
        />
      </View>
    </View>
  );
};
export default ScheduleOption;
const styles = StyleSheet.create({
  container: {...customPadding(10, 20, 0, 20)},
  footer: {...customPadding(0, 0, 40, 0)},
  timeText: {
    paddingVertical: 8,
  },
});
