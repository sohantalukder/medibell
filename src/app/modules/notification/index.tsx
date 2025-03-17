import {View, Text, StatusBar, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {typographies} from '@styles/typographies.style.asset';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {
  customPadding,
  globalStyles,
  themedGlobalStyles,
} from '@styles/global.style.asset';
import PillIcon from '@icons/Pill.icon';
import dayjs from 'dayjs';
import TimeIcon from '@icons/Time.icon';
import rs from '@styles/responsiveSize.style.asset';
import Button from '@components/button/button/Button.component';

const Separator = ({colors}: {colors: Colors}) => (
  <View style={themedGlobalStyles(colors).divider} />
);

const Notification = () => {
  const colors = useTheme().colors as Colors;
  const SeparatorComponent = useCallback(
    () => <Separator colors={colors} />,
    [colors],
  );
  return (
    <View style={[globalStyles.flex1, {backgroundColor: colors.background}]}>
      <StatusBar barStyle="light-content" />
      <View style={{...customPadding(20, 20, 20, 20)}}>
        <Text style={typographies(colors).heading5}>Notification</Text>
      </View>
      <FlatList
        data={Array.from({length: 10})}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        renderItem={({item: _}) => {
          return (
            <View
              style={[
                {...customPadding(10, 20, 20, 20)},
                globalStyles.rowBetween,
              ]}>
              <View style={[globalStyles.flexRow, globalStyles.flexGrow1]}>
                <PillIcon />
                <View style={globalStyles.flexShrink1}>
                  <Text
                    style={[
                      typographies(colors).bodyLargeBold,
                      {marginBottom: rs(3)},
                    ]}>
                    Omega 200mg
                  </Text>
                  <Text style={typographies(colors).bodySmallRegular}>
                    It's time to take your Omega 200mg
                  </Text>
                  <View
                    style={[
                      globalStyles.flexRow,
                      {gap: rs(4), marginTop: rs(4)},
                    ]}>
                    <TimeIcon height={rs(14)} width={rs(14)} />
                    <Text style={typographies(colors).bodySmallMedium}>
                      {dayjs(new Date()).format('hh:mm a, DD MMM YYYY')}
                    </Text>
                  </View>
                </View>
              </View>
              <Button
                text="Taken"
                onPress={() => {}}
                wrapStyle={{
                  width: rs(70),
                  height: rs(35),
                  borderRadius: rs(500),
                }}
                variant="primary"
              />
            </View>
          );
        }}
        ItemSeparatorComponent={() => {
          return <SeparatorComponent />;
        }}
      />
    </View>
  );
};

export default Notification;
