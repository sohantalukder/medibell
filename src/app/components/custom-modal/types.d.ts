import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

interface _showModalProps {
  flag: boolean;
  component?: React.FC;
  componentProps?: Object<T>;
  modalProps?: Object<T>;
  style?: StyleProp<ViewStyle>;
}

export type {_showModalProps};
