import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../assets/styles/global.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import CalendarPicker, {ChangedDate} from 'react-native-calendar-picker';
import getHexaOpacityColorCode from '../../helper/utilities/getHexaOpacityColor.utility';
import ArrowDownIcon from '../../assets/icons/ArrowDown.icon.assets';
interface _props {
  callBack: (date1?: unknown) => void;
}
const DateBottomSheet: React.FC<_props> = ({callBack}) => {
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const onDateChange = (date: Date, type: ChangedDate) => {
    const newDate = JSON.stringify(date);
    const newDate1 = newDate.substring(1, newDate.length - 1);
    const dates = newDate1.split('T');
    const date1 = dates[0].split('-');
    const day = date1[2];
    const month = date1[1];
    const year = date1[0];
    if (type === 'END_DATE') {
      if (day === undefined) {
        setSelectedEndDate('');
        callBack();
      } else {
        setSelectedEndDate(day + '/' + month + '/' + year);
        callBack(selectedStartDate + ' - ' + day + '/' + month + '/' + year);
      }
    } else {
      setSelectedStartDate(day + '/' + month + '/' + year);
      callBack(day + '/' + month + '/' + year + ' - ' + selectedEndDate);
    }
  };
  return (
    <View style={{paddingVertical: rs(10)}}>
      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        todayBackgroundColor={getHexaOpacityColorCode(
          customTheme.colors.pink,
          0.6,
        )}
        selectedDayColor={customTheme.colors.pink}
        selectedDayTextColor={customTheme.colors.pureWhite}
        onDateChange={onDateChange}
      />
    </View>
  );
};
interface dateTimeInputProps {
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (props: string, name: string) => void;
  style?: StyleProp<ViewStyle>;
  name?: string;
  leftIcon?: React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
}
const RangeDate: React.FC<dateTimeInputProps> = ({
  label,
  placeholder = 'Select Time',
  defaultValue = '',
  onChange,
  style,
  name,
  containerStyle,
  leftIcon,
}) => {
  const [date, setDate] = useState<string>(defaultValue);
  const dateChange = (value: string) => {
    value && setDate(value);
    onChange && onChange(value || date, name ? name?.trim() : '');
  };
  const handleOpenModal = () => {
    global.showBottomSheet({
      flag: true,
      component: DateBottomSheet as any,
      componentProps: {defaultValue: date, callBack: dateChange, label},
    });
  };
  return (
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
            {date || placeholder}
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
  );
};
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
export default RangeDate;
