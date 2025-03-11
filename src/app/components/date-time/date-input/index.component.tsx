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
import CalenderIcon from '../../../assets/icons/Calender.icon.asset';

interface dateInputProps {
  label?: string;
  placeholder?: string;
  defaultValue?: Date;
  onChange?: (props?: Date, name?: string) => void;
  style?: ViewStyle;
  name?: string;
}
const DatePickerInput: React.FC<dateInputProps> = ({
  label,
  placeholder = 'Select Date',
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
          style={[
            styles.container,
            {
              borderColor: date
                ? customTheme.colors.pink
                : customTheme.colors.grey3,
            },
          ]}
          onPress={handleOpenModal}
          activeOpacity={0.6}>
          <CalenderIcon />
          <Text
            style={[
              typographies.interSemiBold20,
              globalStyles.flexShrink1,
              {
                color: !date
                  ? customTheme.colors.grey3
                  : customTheme.colors.grey,
              },
            ]}
            numberOfLines={1}>
            {moment(date).format('DD-MM-yyyy') || placeholder}
          </Text>
        </TouchableOpacity>
      </View>
      {show && (
        <CustomPicker onChange={dateChange} value={date} mode={'date'} />
      )}
    </>
  );
};

export default DatePickerInput;

const styles = StyleSheet.create({
  container: {
    borderColor: customTheme.colors.grey3,
    ...customPadding(17.5, 16, 17.5, 16),
    borderWidth: 1,
    width: '100%',
    borderRadius: rs(16),
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    gap: 10,
  },
});
