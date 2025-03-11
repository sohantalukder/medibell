import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {customTheme} from '../../assets/styles/colors.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../assets/styles/global.style.asset';
import moment from 'moment-timezone';
import ScheduleOption from './ScheduleOption.bottomSheet';
import ArrowDownIcon from '../../assets/icons/ArrowDown.icon.assets';
interface dateTimeInputProps {
  label?: string;
  placeholder?: string;
  defaultValue?: Date;
  onChange?: (props: Date, name: string) => void;
  style?: StyleProp<ViewStyle>;
  name?: string;
  leftIcon?: React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
}
const SelectDateTime: React.FC<dateTimeInputProps> = ({
  label,
  placeholder = 'Select Time',
  defaultValue = new Date(),
  onChange,
  style,
  name,
  containerStyle,
  leftIcon,
}) => {
  const [date, setDate] = useState<Date>(defaultValue);
  const dateChange = (value: Date) => {
    value && setDate(value);
    onChange && onChange(value || date, name ? name?.trim() : '');
  };
  const handleOpenModal = () => {
    global.showBottomSheet({
      flag: true,
      component: ScheduleOption as any,
      componentProps: {defaultValue: date, onChange: dateChange, label},
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
            {(defaultValue === date
              ? moment.utc(date).format('MM-DD-YYYY, hh:mm A')
              : moment.utc(date).format('MM-DD-YYYY, h:mm A')) || placeholder}
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

export default SelectDateTime;

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
