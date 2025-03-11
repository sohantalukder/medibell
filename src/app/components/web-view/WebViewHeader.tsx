import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {webViewStyle} from './style';
import {useNavigation} from '@react-navigation/native';
import {
  globalStyles,
  customPadding,
  customMargin,
} from '../../assets/styles/global.style.asset';
import LeftArrowIcon from '../../assets/icons/LeftArrowIcon.icon.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {customTheme} from '../../assets/styles/colors.style.asset';
import ProgressBar from '../progress-bar/ProgressBar';
import LockIcon from '../../assets/icons/Lock.icon';
import OpenTabIcon from '../../assets/icons/OpenTab.icon.asset';

const WebViewHeader = ({title = '', loading = 0, url = ''}) => {
  const navigation = useNavigation();
  const styles = webViewStyle;
  const handleOpenURL = async () => {
    try {
      url ? await Linking.openURL(url) : undefined;
    } catch (_) {}
  };
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.center, globalStyles.flex1]}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <View style={{...customPadding(5, 5, 5)}}>
              <LeftArrowIcon />
            </View>
          </TouchableOpacity>
          <View style={{...customMargin(0, 10, 0, 11)}}>
            <Text
              style={[typographies.bodyMediumBold, styles.title]}
              numberOfLines={1}>
              {title}
            </Text>
            <View style={styles.url}>
              <LockIcon
                height={rs(14)}
                width={rs(14)}
                fill={customTheme.colors.gray2}
              />
              <Text
                style={[typographies.bodyXS, styles.urlText]}
                numberOfLines={1}>
                {url}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleOpenURL}
          style={{...customMargin(0, 0, 0, 20)}}>
          <View style={{...customPadding(5, 0, 5, 5)}}>
            <OpenTabIcon />
          </View>
        </TouchableOpacity>
      </View>
      <ProgressBar width={`${loading * 100}%`} />
    </>
  );
};
export default WebViewHeader;
