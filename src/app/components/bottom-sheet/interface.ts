import React from 'react';
import {ViewStyle} from 'react-native';
interface BottomSheerRefObjectProps {
  show: () => void;
  close: () => void;
  onOpen?: () => void;
  onClose?: () => void;
}
interface BottomSheetHookProps {
  ref: React.RefObject<BottomSheerRefObjectProps>;
}

interface BottomSheetProps<T = any> {
  Component?: React.FC<T>;
  extraProps?: {
    componentProps?: T;
    onOpen?: () => void;
    onClose?: () => void;
  };
  ref: React.ForwardedRef<BottomSheerRefObjectProps>;
  backDropHandler: () => void;
  style?: ViewStyle;
  topBar?: boolean;
}

interface ShowBottomSheetProps<T> {
  flag: boolean;
  component?: React.FC<T>;
  componentProps?: T;
  onClose?: () => void;
  onOpen?: () => void;
  style?: ViewStyle;
  topBar?: boolean;
}

export type {
  BottomSheetHookProps,
  BottomSheerRefObjectProps,
  ShowBottomSheetProps,
  BottomSheetProps,
};
