import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import Animated, {FadeInDown} from 'react-native-reanimated';
import IconButton from '@components/button/icon-button/IconButton.component';
import NotificationIcon from '@icons/Notification.icon';
import {typographies} from '@styles/typographies.style.asset';
import {screens} from '@routes/routeName.routes';
import Slider from './components/Slider';
import dashboardStyles from './styles/dashboard.styles';
import QuickActions from './components/QuickActions';

const Dashboard = () => {
  const colors = useTheme().colors as Colors;
  const navigation = useNavigation();
  const styles = dashboardStyles(colors);
  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{...customPadding(5, 20, 20, 20)}}
        keyboardDismissMode="on-drag">
        <View style={[globalStyles.flexRow, styles.topContainer]}>
          <View>
            <IconButton
              onPress={() => navigation.navigate(screens.notification as never)}
              icon={
                <NotificationIcon height={20} width={20} fill={colors.white} />
              }
              style={{
                backgroundColor: colors.primary,
                height: rs(40),
                width: rs(40),
                borderRadius: rs(12),
              }}
            />
            <View style={styles.notificationCount}>
              <Text
                style={[
                  typographies(colors).bodyXSmallRegular,
                  {color: colors.white},
                ]}>
                3
              </Text>
            </View>
          </View>
        </View>
        <Animated.View entering={FadeInDown.delay(100).springify().damping(10)}>
          <Slider />
        </Animated.View>
        <QuickActions />
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
