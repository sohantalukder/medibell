/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {globalStyles} from '../../assets/styles/global.style.asset';
import RadioInActiveIcon from '../../assets/icons/RadioInActive.icon.assets';
import RadioActiveIcon from '../../assets/icons/RadioActive.icon.assets';
import IconButton from '../button/icon-button/IconButton.component';
import {customTheme} from '../../assets/styles/colors.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';

interface props {
  wrpStyle?: StyleProp<ViewStyle>;
  optionStyle?: StyleProp<ViewStyle>;
  value?: any;
  options: Array<any>;
  valueField?: string;
  titleField?: string;
  subtitleField?: string;
  onChange: Function;
}
interface optionsProps {
  optionStyle?: any;
  value?: any;
  valueField?: string;
  titleField?: string;
  onSelect: Function;
  item: any;
  formatOptions?: Function;
  subtitleField?: string;
  Icon?: React.FC;
}

const EachOption = ({
  optionStyle = {},
  value = null,
  titleField = 'FULL__DATA', //FULL__DATA
  valueField = 'FULL__DATA', //FULL__DATA
  onSelect = () => {},
  subtitleField = '',
  Icon,
  item,
}: optionsProps) => {
  const isChecked = () => {
    let flag = false;
    if (valueField === 'FULL__DATA' && value === item) {
      flag = true;
    } else if (item[valueField] === value) {
      flag = true;
    }
    return flag;
  };
  const [isSelect, setIsSelect] = useState(false);
  useEffect(() => {
    setIsSelect(isChecked());
  }, [value]);
  const handleOnPress = () => {
    onSelect(
      isSelect ? null : valueField === 'FULL__DATA' ? item : item[valueField],
    );
    setIsSelect(!isSelect);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.optionWrp]}
      onPress={handleOnPress}>
      {Icon && <IconButton icon={<Icon />} />}
      <View style={[globalStyles.flexGrow1, globalStyles.flexShrink1]}>
        <Text
          style={[
            typographies.bodyLarge,
            globalStyles.flexShrink1,
            optionStyle,
          ]}>
          {titleField === 'FULL__DATA' ? item : item[titleField]}
        </Text>
        {subtitleField && (
          <Text
            style={[
              typographies.bodyMedium,
              globalStyles.flexShrink1,
              {color: customTheme.colors.grey, marginTop: rs(4)},
            ]}>
            {item[subtitleField]}
          </Text>
        )}
      </View>
      {isSelect ? <RadioActiveIcon /> : <RadioInActiveIcon />}
    </TouchableOpacity>
  );
};

const CustomRadio = ({
  wrpStyle = {},
  options = [],
  optionStyle = {},
  titleField = 'FULL__DATA', //FULL__DATA
  valueField = 'FULL__DATA', //FULL__DATA
  value = null,
  subtitleField = '',
  onChange = () => {},
}: props) => {
  const [selectedOption, setSelectedOption] = useState(value);
  const handleOnClick = (selectedValue: any) => {
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };
  const renderOptions = () => {
    if (options.length === 0) {
      return <Text style={globalStyles.noOptions}>{'No Options Found!'}</Text>;
    }
    return options.map((item, index) => (
      <EachOption
        onSelect={handleOnClick}
        item={item}
        key={index}
        subtitleField={subtitleField}
        Icon={item?.Icon}
        optionStyle={optionStyle}
        titleField={titleField}
        valueField={valueField}
        value={selectedOption}
      />
    ));
  };
  return <View style={[styles.block, wrpStyle]}>{renderOptions()}</View>;
};
export default CustomRadio;

const styles = StyleSheet.create({
  block: {gap: 16},
  optionWrp: {
    flexDirection: 'row',
    flexGrow: 1,
    gap: 16,
    alignItems: 'center',
  },
  optionText: {...typographies.bodyMedium},
});
