import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import Header from '@components/header/Header.component';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {
  customMargin,
  customPadding,
  globalStyles,
  themedGlobalStyles,
} from '@styles/global.style.asset';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {ImageUpload} from '@modules/on-boarding/SetupProfile';
import {typographies} from '@styles/typographies.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import ProfileIcon from '@icons/Profile.icon';
import RightArrowIcon from '@icons/RightArrow.icon';
import NotificationIcon from '@icons/Notification.icon';
import EyeShowIcon from '@icons/EyeShow.icon';
import HelpIcon from '@icons/Help.icon';
import CustomSwitch from '@components/switch/CustomSwitch';
import {statusBar} from '@styles/properties.asset';
const Profile = () => {
  const colors = useTheme().colors as Colors;
  const profileArray = [
    {
      icon: ProfileIcon,
      title: 'Profile',
      onPress: () => {},
    },
    {
      icon: NotificationIcon,
      title: 'Notification',
      onPress: () => {},
    },
    {
      icon: EyeShowIcon,
      title: 'Dark Mode',
      onPress: () => {},
      isSwitch: true,
    },
    {
      icon: HelpIcon,
      title: 'Help',
      onPress: () => {},
    },
  ];
  return (
    <Container
      statusBarBg={colors.primary}
      statusBarStyle={statusBar.lightContent}>
      <Header
        text="Profile"
        textStyle={[globalStyles.textAlignCenter, {color: colors.white}]}
        showLeft={false}
        style={{
          backgroundColor: colors.primary,
          ...customPadding(10, 20, 20, 20),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{...customPadding(20, 20, 20, 20)}}>
        <Animated.View
          entering={FadeInDown.delay(100).springify().damping(10)}
          style={globalStyles.flexRow}>
          <ImageUpload
            style={{width: rs(80), height: rs(80)}}
            editable={false}
          />
          <View style={{gap: rs(8)}}>
            <Text style={[typographies(colors).heading4]} numberOfLines={1}>
              Md. Sohan Talukder
            </Text>
            <Text
              style={[typographies(colors).bodyMediumSemibold]}
              numberOfLines={1}>
              mdtalukder.sohan@gmail.com
            </Text>
          </View>
        </Animated.View>

        <View
          style={[
            themedGlobalStyles(colors).divider,
            {...customMargin(24, 0, 24)},
          ]}
        />
        <View style={{gap: rs(24)}}>
          {profileArray.map((item, index) => (
            <Animated.View
              key={index}
              entering={FadeInDown.delay(index * 100)
                .springify()
                .damping(10)}
              style={[globalStyles.rowBetween]}>
              <View style={[globalStyles.flexRow]}>
                <item.icon width={rs(28)} height={rs(28)} />
                <Text style={[typographies(colors).bodyXLargeSemibold]}>
                  {item.title}
                </Text>
              </View>
              {item.isSwitch ? (
                <CustomSwitch />
              ) : (
                <RightArrowIcon width={rs(20)} height={rs(20)} />
              )}
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default Profile;
