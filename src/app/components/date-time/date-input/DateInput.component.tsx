import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  useColorScheme,
  ColorSchemeName,
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
import dayjs from 'dayjs';
import CalenderIcon from '@icons/Calender.icon';
import {inputStyles} from '@components/text-input/styles/input.styles';
interface dateInputProps {
  label?: string;
  placeholder?: string;
  defaultValue?: Date;
  onChange?: (props: Date, name: string) => void;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  name?: string;
  leftIcon?: React.ReactElement;
  icon?: React.ReactElement;
  minimumDate?: Date;
  maximumDate?: Date;
}
const DateInput: React.FC<dateInputProps> = ({
  label,
  placeholder = 'Select Date',
  defaultValue,
  onChange,
  style,
  name,
  leftIcon,
  containerStyle,
  labelStyle,
  icon,
  minimumDate,
  maximumDate,
}) => {
  const colors = useTheme().colors as Colors;
  const [date, setDate] = useState<Date | null>(defaultValue || null);
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
  const mode = useColorScheme();
  return (
    <>
      <View style={style}>
        {label && (
          <View
            style={[globalStyles.flexRow, {gap: rs(8), marginBottom: rs(8)}]}>
            <Text
              style={[
                typographies(colors).bodyLargeSemibold,
                {color: colors.default1},
                labelStyle,
              ]}>
              {label}
            </Text>
            {icon}
          </View>
        )}
        <TouchableOpacity
          onPress={handleOpenModal}
          activeOpacity={0.6}
          style={[
            styles(colors).container,
            show &&
              inputStyles({colors, mode: mode as ColorSchemeName})
                .activeContainer,
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
              {date ? dayjs(date).format('DD-MM-YYYY') : placeholder}
            </Text>
          </View>
          <CalenderIcon />
        </TouchableOpacity>
      </View>
      {show && (
        <CustomPicker
          minimumDate={minimumDate}
          onChange={dateChange}
          maximumDate={maximumDate}
          value={date || new Date()}
          mode={'date'}
        />
      )}
    </>
  );
};

export default DateInput;

const styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      borderColor: colors.gray8,
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
