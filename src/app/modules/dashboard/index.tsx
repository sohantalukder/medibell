import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import CircularProgress from './components/Progress';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import Animated, {FadeInDown} from 'react-native-reanimated';
import IconButton from '@components/button/icon-button/IconButton.component';
import NotificationIcon from '@icons/Notification.icon';
import ProfileIcon from '@icons/Profile.icon';
import hexOpacityToColor from '@helper/utilities/hexOpacityToColor';
import {typographies} from '@styles/typographies.style.asset';
import {screens} from '@routes/routeName.routes';
import Slider from './components/Slider';
const Dashboard = () => {
  const colors = useTheme().colors as Colors;
  const navigation = useNavigation();
  return (
    <Container>
      <FlatList
        data={[]}
        ListHeaderComponent={
          <>
            <View
              style={[
                globalStyles.flexRow,
                {justifyContent: 'flex-end', ...customPadding(5, 20)},
              ]}>
              <View>
                <IconButton
                  onPress={() =>
                    navigation.navigate(screens.notification as never)
                  }
                  icon={
                    <NotificationIcon
                      height={20}
                      width={20}
                      fill={colors.white}
                    />
                  }
                  style={{
                    backgroundColor: colors.primary,
                    height: rs(40),
                    width: rs(40),
                    borderRadius: rs(12),
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: -2,
                    right: -2,
                    backgroundColor: colors.error1,
                    borderRadius: rs(24),
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: rs(16),
                    height: rs(16),
                  }}>
                  <Text
                    style={[
                      typographies(colors).bodyXSmallRegular,
                      {color: colors.white},
                    ]}>
                    3
                  </Text>
                </View>
              </View>
              <IconButton
                icon={
                  <ProfileIcon height={20} width={20} fill={colors.white} />
                }
                style={{
                  backgroundColor: colors.primary,
                  height: rs(40),
                  width: rs(40),
                  borderRadius: rs(12),
                }}
              />
            </View>
            <Animated.View
              entering={FadeInDown.delay(100).springify().damping(10)}>
              <View style={globalStyles.rowBetween}>
                <Slider />
              </View>
            </Animated.View>
          </>
        }
        renderItem={({item}) => <></>}
      />
    </Container>
  );
};

export default Dashboard;
