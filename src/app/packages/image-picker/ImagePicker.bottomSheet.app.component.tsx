import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {typographies} from '@styles/typographies.style.asset';
import {
  globalStyles,
  customPadding,
  customMargin,
} from '@styles/global.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import imagePicker from './imagePicker';
import LeftArrowIcon from '@icons/LeftArrow.icon';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import CameraIcon from '@icons/Camera.icon';
import GalleryFillIcon from '@icons/GalleryFill.icon';
import hexToRgbA from '@components/button/ripple/hexaToRgba';

const ImagePickerBottomSheet: React.FC<{
  success: (params: any) => void;
  failed: (params: any) => void;
  multiple?: boolean;
  maxFiles?: number;
}> = ({success, failed, multiple = false, maxFiles = 2}) => {
  const colors = useTheme().colors as Colors;
  const handleOpenCamera = () => {
    global.showBottomSheet({flag: false});
    imagePicker.openCamera({success, failed});
  };
  const handleOpenGallery = () => {
    global.showBottomSheet({flag: false});
    imagePicker.openGallery({
      success,
      failed,
      multiple: multiple,
      maxFiles,
    });
  };
  const styles = imagePickerStyles(colors);
  return (
    <View>
      <View style={styles.topHeader}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            global.showBottomSheet({flag: false});
          }}>
          <LeftArrowIcon />
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          style={[
            typographies(colors).bodyXLargeBold,
            globalStyles.flexShrink1,
          ]}>
          Image Picker
        </Text>
      </View>
      <View style={[globalStyles.rowBetween, styles.middleHeader]}>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={0.6}
          onPress={handleOpenCamera}>
          <View style={styles.imageContainer}>
            <CameraIcon height={rs(40)} width={rs(40)} fill={colors.primary} />
          </View>
          <Text style={typographies(colors).bodyLargeMedium}>Open Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          activeOpacity={0.6}
          onPress={handleOpenGallery}>
          <View style={styles.imageContainer}>
            <GalleryFillIcon
              height={rs(40)}
              width={rs(40)}
              fill={colors.primary}
            />
          </View>
          <Text style={typographies(colors).bodyLargeMedium}>Open Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImagePickerBottomSheet;

const imagePickerStyles = (colors: Colors) =>
  StyleSheet.create({
    topHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      ...customPadding(10, 20, 10, 20),
    },
    container: {
      alignItems: 'center',
      width: '50%',
    },
    imageContainer: {
      height: rs(88),
      width: rs(88),
      backgroundColor: hexToRgbA(colors.primary, 0.08),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      ...customMargin(0, 0, 8),
    },
    middleHeader: {...customPadding(20, 0, 20, 0), flex: 0, gap: 0},
  });
