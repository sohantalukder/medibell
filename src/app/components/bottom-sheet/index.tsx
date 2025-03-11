/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import CustomBottomSheet from './CustomBottomSheet';
import {BackHandler} from 'react-native';
import {BottomSheerRefObjectProps, ShowBottomSheetProps} from './interface';
import useIsMounted from '@helper/hooks/useIsMounted.hook';

declare global {
  var showBottomSheet: <T>({
    flag,
    component,
    componentProps,
    style,
    topBar,
  }: ShowBottomSheetProps<T>) => void;
}

const BottomSheetIndex = () => {
  const isMount = useIsMounted();
  const ref = useRef<BottomSheerRefObjectProps>(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const reloadRef = useRef<any>(null);
  const componentRef = useRef<any>(null);
  const propsRef = useRef<any>(null);

  global.showBottomSheet = ({
    flag,
    component = null,
    componentProps = {},
    onClose = () => {},
    onOpen = () => {},
    style,
    topBar = false,
  }) => {
    if (flag && isShow) {
      reloadRef.current = {
        component: component,
        propsRef: {
          componentProps,
          onClose,
          onOpen,
          style,
          topBar,
        },
      };
      ref?.current?.close();
      return;
    }
    if (flag) {
      componentRef.current = component;
      propsRef.current = {
        componentProps,
        onClose,
        onOpen,
        style,
        topBar,
      };
      reloadRef.current = null;
      setIsShow(true);
      return;
    }
    ref?.current?.close();
  };
  useEffect(() => {
    if (!isMount) {
      return;
    }
    if (isShow) {
      ref?.current?.show();
    } else {
      if (reloadRef.current) {
        componentRef.current = reloadRef.current.component;
        propsRef.current = {...reloadRef.current.propsRef};
        reloadRef.current = null;
        setIsShow(true);
        return;
      }
      componentRef.current = null;
      propsRef.current = null;
      reloadRef.current = null;
    }
    const backAction = () => {
      if (propsRef?.current?.onClose) {
        global.showBottomSheet({flag: false});
        return true;
      } else {
        return false;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [isShow]);
  const backDropHandler = () => {
    setIsShow(false);
    if (propsRef?.current?.onClose) {
      propsRef.current.onClose();
    }
  };
  if (!isShow) {
    return null;
  }
  return (
    <CustomBottomSheet
      ref={ref}
      backDropHandler={backDropHandler}
      Component={componentRef.current}
      style={propsRef.current?.style}
      topBar={propsRef.current?.topBar}
      extraProps={{
        ...propsRef.current,
        componentProps: {
          ...propsRef.current.componentProps,
        },
      }}
    />
  );
};
export default BottomSheetIndex;
