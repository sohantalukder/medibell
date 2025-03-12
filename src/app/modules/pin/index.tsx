import {View, Text} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import OTPInput from '@components/text-input/otp-input/OtpInput.component';
import Header from '@components/header/Header.component';
import {typographies} from '@styles/typographies.style.asset';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import rs from '@styles/responsiveSize.style.asset';

const Pin = () => {
  const colors = useTheme().colors as Colors;
  return (
    <Container>
      <Header
        text="Set your PIN"
        rightComponent={
          <Text style={[typographies(colors).bodyLargeSemibold]}>Skip</Text>
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
        <OTPInput />
      </View>
    </Container>
  );
};

export default Pin;
