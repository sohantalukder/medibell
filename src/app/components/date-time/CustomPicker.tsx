import React from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {useColorScheme} from 'react-native';
import {_dateTime} from './interface';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const CustomPicker: React.FC<_dateTime> = ({
  value = new Date(),
  mode = 'date',
  onChange = () => {},
  minimumDate,
}) => {
  const colors = useTheme().colors as Colors;
  const theme = useColorScheme() || 'light';
  return (
    <RNDateTimePicker
      value={value}
      mode={mode}
      onChange={onChange}
      themeVariant={theme}
      accentColor={colors.primary as string}
      minimumDate={minimumDate}
    />
  );
};

export default CustomPicker;
