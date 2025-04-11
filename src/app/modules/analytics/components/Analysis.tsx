import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import rs from '@styles/responsiveSize.style.asset';
import {useTheme} from '@react-navigation/native';
import {typographies} from '@styles/typographies.style.asset';
import {customPadding} from '@styles/global.style.asset';
import {Colors} from '@styles/colors.style.asset';
const Analysis = () => {
  const colors = useTheme().colors as Colors;
  const analysisData = {
    active: '05',
    completed: '02',
    inComplete: '01',
    reward: '01',
  };
  const convertFullText = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };
  return (
    <View>
      <Text
        style={[typographies(colors).bodyLargeBold, {marginBottom: rs(10)}]}>
        Analysis
      </Text>
      <View style={styles.analysisContainer}>
        {Object.keys(analysisData).map(key => (
          <View
            style={{
              width: rs('wf') / 2 - 25,
              backgroundColor: colors.white,
              padding: rs(10),
              borderRadius: rs(10),
              ...customPadding(15, 15, 15, 15),
              gap: rs(2.2),
            }}
            key={key}>
            <Text style={typographies(colors).bodyMediumMedium}>
              {convertFullText(key)}
            </Text>
            <Text style={typographies(colors).bodyLargeBold}>
              {analysisData[key as keyof typeof analysisData]}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Analysis;

const styles = StyleSheet.create({
  analysisContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
