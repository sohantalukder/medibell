import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import Header from '@components/header/Header.component';
import {useTheme} from '@react-navigation/native';
import {customPadding} from '@styles/global.style.asset';
import {Colors} from '@styles/colors.style.asset';
import CustomInput from '@components/text-input/CustomInput.c';
import rs from '@styles/responsiveSize.style.asset';
import Button from '@components/button/button/Button.component';
import {typographies} from '@styles/typographies.style.asset';
import HowOften from './components/HowOften';

const AddMedicine = () => {
  const colors = useTheme().colors as Colors;
  return (
    <Container statusBarBg={colors.primary}>
      <Header
        text="Add Medicine"
        showLeft={false}
        rightComponent={
          <Button
            text="Save"
            onPress={() => {}}
            wrapStyle={{
              borderRadius: rs(200),
              height: rs(30),
              width: rs(80),
              backgroundColor: colors.white,
            }}
            textStyle={[
              typographies(colors).bodyMediumSemibold,
              {color: colors.black, letterSpacing: rs(0)},
            ]}
          />
        }
        style={{
          backgroundColor: colors.primary,
          ...customPadding(10, 20, 20, 20),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          ...customPadding(20, 20, 20, 20),
          gap: rs(20),
        }}>
        <CustomInput
          onChangeText={() => {}}
          label="Medicine Name"
          placeholder="Enter Medicine Name"
        />
        <CustomInput
          onChangeText={() => {}}
          label="Dosage"
          placeholder="e.g 500mg"
        />
        <View>
          <Text
            style={[
              typographies(colors).bodyLargeSemibold,
              {...customPadding(0, 0, 5)},
            ]}>
            How Often
          </Text>
          <HowOften />
        </View>
      </ScrollView>
    </Container>
  );
};

export default AddMedicine;
