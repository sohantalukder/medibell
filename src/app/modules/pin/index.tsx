import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '@layouts/Container.layout';
import OTPInput from '@components/text-input/otp-input/OtpInput.component';
import Header from '@components/header/Header.component';
import {typographies} from '@styles/typographies.style.asset';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import {screens} from '@routes/routeName.routes';
import {useNavigation} from '@react-navigation/native';

const Pin = () => {
  const colors = useTheme().colors as Colors;
  const navigation = useNavigation();
  const [pin, setPin] = useState<string>('');
  useEffect(() => {
    if (pin.length === 6) {
      navigation.navigate(screens.dashboard as never);
    }
  }, [navigation, pin]);
  return (
    <Container>
      <Header
        text="Set your PIN"
        rightComponent={
          <Text
            style={[typographies(colors).bodyLargeSemibold]}
            onPress={() => navigation.navigate(screens.dashboard as never)}>
            Skip
          </Text>
        }
      />
      <Text
        style={[
          typographies(colors).bodyLargeSemibold,
          globalStyles.textAlignCenter,
          {marginTop: rs(20)},
        ]}>
        Setup your PIN to secure your account
      </Text>
      <View style={[{...customPadding(60)}, globalStyles.alignJustifyCenter]}>
        <OTPInput callback={setPin} />
      </View>
    </Container>
  );
};

export default Pin;
