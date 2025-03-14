import {Animated, FlatList, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import data from './data';
import rs from '@styles/responsiveSize.style.asset';
import {customMargin, globalStyles} from '@styles/global.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const colors = useTheme().colors as Colors;
  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={{...customMargin(5, 20, 20, 20)}}>
      <Text style={[typographies(colors).heading6, {marginBottom: rs(16)}]}>
        Medicine for Morning
      </Text>
      <View
        style={[
          {height: rs(150), marginBottom: rs(14)},
          globalStyles.widthFull,
        ]}>
        <FlatList
          data={data}
          renderItem={({item}) => <SlideItem item={item} />}
          horizontal
          pagingEnabled
          contentContainerStyle={[globalStyles.widthFull, {gap: rs(16)}]}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>
      <Pagination data={data} scrollX={scrollX} index={index} />
    </View>
  );
};

export default Slider;
