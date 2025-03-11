import {IconProps} from '@entity-models/iconProps.types';
import React from 'react';
import {TextInputProps, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {CountryCode} from './countryCode';

export interface HeaderSearchInterface {
  onChange: (text: string) => void;
  defaultValue?: string;
  cancelHandler?: () => void;
  border?: 'showBorder' | 'noBorder';
}

export interface CustomInputProps {
  leftIcon?: React.ReactElement<IconProps>;
  rightIcon?: React.ReactElement<IconProps>;
  rightHandler?: () => void;
  placeholder?: string;
  onChangeText: (
    value: string,
    name?: string,
    validationRules?: () => void,
  ) => void;
  defaultValue?: string;
  name?: string;
  validationRules?: () => void;
  inputProps?: TextInputProps;
  style?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
}
export interface PhoneNumberInputProps {
  onChangeText: (value: string, name?: string, isValidNumber?: boolean) => void;
  defaultValue?: string;
  name?: string;
  inputProps?: TextInputProps;
  style?: StyleProp<ViewStyle>;
  defaultCode?: CountryCode;
  placeholder?: string;
}
export interface MultilineInputProps {
  placeholder?: string;
  onChangeText: (value: string, name?: string, validationRules?: void) => void;
  defaultValue?: string;
  name?: string;
  numberOfLines?: number;
  validationRules?: () => void;
  inputProps?: TextInputProps;
  height?: number;
  textAlignVertical?: TextInputProps['textAlignVertical'];
}
