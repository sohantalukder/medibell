import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ChevronRightIcon from '../../assets/icons/ChevronRight.icon.assets';
import {customTheme} from '../../assets/styles/colors.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {_iconProps} from '../../types/icons.types';

export interface _ItemNavigatorInterface {
  title: string;
  rightTitle?: string;
  onPress?: () => void;
  LeftIcon?: React.FC<_iconProps>;
  showRightIcon?: boolean;
}

const ItemNavigator: React.FC<{item: _ItemNavigatorInterface}> = ({item}) => {
  const {title, rightTitle, onPress, LeftIcon, showRightIcon = true} = item;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemContainer}>
        {LeftIcon && <LeftIcon />}
        <Text style={styles.title}>{title}</Text>
        {item.rightTitle && <Text style={styles.rightTitle}>{rightTitle}</Text>}
        {showRightIcon && <ChevronRightIcon />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: customTheme.colors.elevation1,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    borderRadius: 4,
    padding: rs(16),
    height: rs(56),
    borderColor: customTheme.colors.elevation2,
    borderWidth: 1,
  },
  title: {
    ...typographies.labelLarge,
    flexGrow: 1,
  },
  rightTitle: {
    ...typographies.labelSmall,
    color: customTheme.colors.grey,
  },
});

export default ItemNavigator;
