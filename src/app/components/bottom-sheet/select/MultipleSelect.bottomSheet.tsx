import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import CheckIcon from '../../../assets/icons/Check.icon.assets';
import {customTheme} from '../../../assets/styles/colors.style.asset';
import LeftArrowIcon from '../../../assets/icons/LeftArrow.icon.asset';
import EmptyContent from '../../empty-content/EmptyContent.component';
import {messages} from '../../../assets/constants/messages.constants';

interface _eachOption {
  onChange: (params: any, params2: string) => void;
  item: any;
  titleField?: string;
  name: string;
  titleFieldFormatter?: (params?: string) => string;
  checked: Array<any>;
}
const EachOption: React.FC<_eachOption> = ({
  onChange,
  item,
  titleField = 'FULL__DATA',
  titleFieldFormatter,
  name,
  checked,
}) => {
  const [select, setSelect] = useState(checked?.includes(item) ?? false);
  const onPress = () => {
    setSelect(!select);
    onChange && onChange(item, name);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[globalStyles.rowBetween, {...customPadding(10, 0, 10, 0)}]}>
      <Text
        style={[typographies.interMedium14, {color: customTheme.colors.black}]}>
        {titleFieldFormatter
          ? titleFieldFormatter(item)
          : titleField === 'FULL__DATA'
          ? item
          : item[titleField]}
      </Text>
      {select && (
        <CheckIcon fill={customTheme.colors.pink} height={16} width={16} />
      )}
    </TouchableOpacity>
  );
};
interface _props {
  onChange: (props: any, params2: string) => void;
  data: Array<any>;
  checked: Array<any>;
  title?: string;
  formatter?: (params: string) => void;
  titleField?: string;
  name: string;
  titleFieldFormatter?: (params?: string) => string;
}
const MultipleSelect: React.FC<_props> = ({
  onChange,
  data,
  title,
  titleField,
  titleFieldFormatter,
  name,
  formatter,
  checked,
}) => {
  return (
    <View style={{...customPadding(20, 20, 20, 20)}}>
      <View style={globalStyles.flexRow}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            global.showBottomSheet({flag: false});
          }}>
          <LeftArrowIcon />
        </TouchableOpacity>
        {title && (
          <Text
            numberOfLines={1}
            style={[
              typographies.interSemiBold16,
              {color: customTheme.colors.black},
              globalStyles.flexShrink1,
            ]}>
            {title}
          </Text>
        )}
      </View>
      <FlatList
        data={data}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={
          data?.length > 0 ? {...customPadding(8)} : globalStyles.emptyFlexBox
        }
        ListEmptyComponent={<EmptyContent text={messages.noDataFound} />}
        initialNumToRender={12}
        renderItem={({item, index}: {item: any; index: number}) => {
          return (
            <EachOption
              item={formatter ? formatter(item) : item}
              titleField={titleField}
              onChange={onChange}
              name={name}
              checked={checked}
              titleFieldFormatter={titleFieldFormatter}
              key={index}
            />
          );
        }}
        onEndReachedThreshold={1}
      />
    </View>
  );
};

export default MultipleSelect;
