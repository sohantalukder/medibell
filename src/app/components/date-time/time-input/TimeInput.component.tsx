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
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import CustomPicker from '../CustomPicker';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';
import DownArrowIcon from '@icons/DownArrow.icon';
import dayjs from 'dayjs';

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
  defaultValue = null,
  onChange,
  style,
  name,
  containerStyle,
  leftIcon,
}) => {
  const colors = useTheme().colors as Colors;
  const [date, setDate] = useState<Date | null>(
    defaultValue ? new Date(defaultValue) : null,
  );
  const [show, setShow] = useState<boolean>(false);
  const dateChange = (event: DateTimePickerEvent, newDate?: Date) => {
    setShow(false);
    newDate && setDate(newDate);
    onChange &&
      onChange(newDate || date || new Date(), name ? name?.trim() : '');
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
              typographies(colors).bodyLargeSemibold,
              {marginBottom: rs(8)},
            ]}>
            {label}
          </Text>
        )}
        <TouchableOpacity
          onPress={handleOpenModal}
          activeOpacity={0.6}
          style={[
            styles.container,
            {borderColor: colors.gray3},
            containerStyle,
          ]}>
          <View style={[globalStyles.flexRow]}>
            {leftIcon}
            <Text
              style={[
                typographies(colors).bodyLargeRegular,
                globalStyles.flexShrink1,
                {
                  color: !date ? colors.gray3 : colors.default1,
                },
              ]}
              numberOfLines={1}>
              {date ? dayjs(date).format('hh:mm A') : placeholder}
            </Text>
          </View>
          <View style={{transform: [{rotate: '270deg'}]}}>
            <DownArrowIcon height={20} width={20} fill={colors.default1} />
          </View>
        </TouchableOpacity>
      </View>
      {show && (
        <CustomPicker
          onChange={dateChange}
          value={date || new Date()}
          mode={'time'}
        />
      )}
    </>
  );
};

export default TimeInput;

const styles = StyleSheet.create({
  container: {
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
