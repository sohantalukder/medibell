import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
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
  onChange?: (props: Date, name: string) => void;
  style?: ViewStyle;
  name?: string;
  leftIcon?: React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
}
const TimeInput: React.FC<dateTimeInputProps> = ({
  label,
  placeholder = 'Select Time',
  defaultValue = new Date(),
  onChange,
  style,
  name,
  containerStyle,
  leftIcon,
}) => {
  const [date, setDate] = useState<Date>(new Date(defaultValue));
  const [show, setShow] = useState<boolean>(false);
  const dateChange = (event: DateTimePickerEvent, newDate?: Date) => {
    setShow(false);
    newDate && setDate(newDate);
    onChange && onChange(newDate || date, name ? name?.trim() : '');
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
              typographies.interSemiBold16,
              {color: customTheme.colors.black, marginBottom: rs(8)},
            ]}>
            {label}
          </Text>
        )}
        <TouchableOpacity
          onPress={handleOpenModal}
          activeOpacity={0.6}
          style={[
            styles.container,
            {borderColor: customTheme.colors.grey3},
            containerStyle,
          ]}>
          <View style={[globalStyles.flexRow]}>
            {leftIcon}
            <Text
              style={[
                typographies.interNormal16,
                globalStyles.flexShrink1,
                {
                  color: !date
                    ? customTheme.colors.grey3
                    : customTheme.colors.black,
                },
              ]}
              numberOfLines={1}>
              {moment(date).format('hh:mm A') || placeholder}
            </Text>
          </View>
          <View style={{transform: [{rotate: '270deg'}]}}>
            <ArrowDownIcon
              height={20}
              width={20}
              fill={customTheme.colors.pink}
            />
          </View>
        </TouchableOpacity>
      </View>
      {show && (
        <CustomPicker onChange={dateChange} value={date} mode={'time'} />
      )}
    </>
  );
};

export default TimeInput;

const styles = StyleSheet.create({
  container: {
    borderColor: customTheme.colors.grey3,
    ...customPadding(17, 16, 17, 16),
    borderWidth: 1,
    width: '100%',
    borderRadius: rs(16),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
    gap: 10,
  },
});
