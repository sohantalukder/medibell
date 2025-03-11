import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {typographies} from '../../assets/styles/typographies.style.asset';
import CustomSwitch from '../switch/CustomSwitch';

export interface _itemToggleInterface {
  title: string;
  description: string;
  isActive: boolean;
}

const ItemToggle: React.FC<{item: _itemToggleInterface}> = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={typographies.labelLarge}>{item.title}</Text>
        <Text style={typographies.bodySmall}>{item.description}</Text>
      </View>

      <View>
        <CustomSwitch value={item.isActive} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  textContainer: {
    flexGrow: 1,
    gap: 8,
    flexShrink: 1,
  },
});

export default ItemToggle;
