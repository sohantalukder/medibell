import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import moment from 'moment-timezone';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {customTheme} from '../../../assets/styles/colors.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import CustomPicker from '../CustomPicker';
import ArrowDownIcon from '../../../assets/icons/ArrowDown.icon.assets';

interface dateTimeInputProps {
  label?: string;
  placeholder?: string;
  defaultValue?: Date;
  onChange?: (props?: Date, name?: string) => void;
  style?: ViewStyle;
  name?: string;
  mode?: 'date' | 'time';
}
const TimePickerInput: React.FC<dateTimeInputProps> = ({
  label,
  placeholder = 'Select Time',
  defaultValue = new Date(),
  onChange,
  style,
  name,
}) => {
  const [date, setDate] = useState<Date>(new Date(defaultValue));
  const [show, setShow] = useState<boolean>(false);
  const dateChange = (event: DateTimePickerEvent, newDate?: Date) => {
    setShow(false);
    newDate && setDate(newDate);
    onChange && onChange(newDate, name ? name?.trim() : '');
  };
  const handleOpenModal = () => {
    setShow(true);
  };
  return (
    <>
      <View style={style}>
        {label && (
          <Text
            style={[
              typographies.interSemiBold20,
              {color: customTheme.colors.black, marginBottom: rs(6)},
            ]}>
            {label}
          </Text>
        )}
        <TouchableOpacity
          style={[styles.textContainer]}
          onPress={handleOpenModal}
          activeOpacity={0.6}>
          <Text
            style={[
              typographies.interSemiBold20,
              globalStyles.flexShrink1,
              globalStyles.flexGrow1,
              {
                color: !date
                  ? customTheme.colors.grey3
                  : customTheme.colors.grey,
              },
            ]}
            numberOfLines={1}>
            {moment(date).format('hh:mm A') || placeholder}
          </Text>
          <ArrowDownIcon fill={customTheme.colors.grey3} />
        </TouchableOpacity>
      </View>
      {show && (
        <CustomPicker onChange={dateChange} value={date} mode={'time'} />
      )}
    </>
  );
};

export default TimePickerInput;

const styles = StyleSheet.create({
  textContainer: {
    height: rs(42),
    flexDirection: 'row',
    gap: 8,
    ...customPadding(0, 16, 0, 16),
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: customTheme.colors.grey3,
  },
});
