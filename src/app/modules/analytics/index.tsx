import {ScrollView} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import Header from '@components/header/Header.component';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {statusBar} from '@styles/properties.asset';
import Progress from './components/Progress';
import Analysis from './components/Analysis';
import rs from '@styles/responsiveSize.style.asset';
const Analytics = () => {
  const colors = useTheme().colors as Colors;

  return (
    <Container
      statusBarBg={colors.primary}
      statusBarStyle={statusBar.lightContent}>
      <Header
        showLeft={false}
        text="Analytics"
        textStyle={[globalStyles.textAlignCenter, {color: colors.white}]}
        style={{
          backgroundColor: colors.primary,
          ...customPadding(10, 20, 20, 20),
        }}
      />
      <ScrollView
        contentContainerStyle={{...customPadding(20, 20, 20, 20), gap: rs(18)}}>
        <Progress />
        <Analysis />
      </ScrollView>
    </Container>
  );
};

export default Analytics;
