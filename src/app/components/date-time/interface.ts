import {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {ViewStyle} from 'react-native';
interface _dateTime {
  value?: Date;
  mode?: 'date' | 'time';
  onChange?: (event: DateTimePickerEvent, date?: Date) => void;
  minimumDate?: Date;
  maximumDate?: Date;
}
interface _dateTimeInputProps {
  label?: string;
  placeholder?: string;
  defaultValue?: Date;
  onChange?: (props?: Date, name?: string) => void;
  style?: ViewStyle;
  name?: string;
}
export type {_dateTimeInputProps, _dateTime};
