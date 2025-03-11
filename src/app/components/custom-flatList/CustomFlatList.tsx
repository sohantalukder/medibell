import EmptyContent from '@components/empty-content/EmptyContent.component';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  FlatListProps,
  ViewStyle,
} from 'react-native';
type props<T> = {
  data: T[];
  renderItem: ({item, index}: {item: T; index: number}) => JSX.Element;
  onRefresh?: () => void;
  refreshing?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
  isLoading?: boolean;
  emptyMessage?: string;
  flatListProps?: FlatListProps<T>;
  inverted?: boolean;
  contentContainerStyle?: ViewStyle;
  emptyStyle?: ViewStyle;
};
const CustomFlatList = <T,>({
  data = [],
  renderItem,
  onRefresh,
  refreshing,
  onLoadMore,
  hasMore,
  isLoading,
  emptyMessage,
  flatListProps,
  inverted = false,
  contentContainerStyle = {...customPadding(20, 20, 20, 20), gap: 20},
  emptyStyle = {...globalStyles?.centerView, paddingVertical: 20} as ViewStyle,
}: props<T>) => {
  const colors = useTheme().colors as Colors;
  return (
    <FlatList
      {...flatListProps}
      data={data}
      inverted={inverted}
      onRefresh={onRefresh}
      refreshing={refreshing}
      renderItem={renderItem}
      contentContainerStyle={
        data.length === 0 ? emptyStyle : contentContainerStyle
      }
      keyboardDismissMode="on-drag"
      keyExtractor={(_item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      ListEmptyComponent={
        <EmptyContent
          forLoading={isLoading}
          text={emptyMessage || 'No Data Found'}
        />
      }
      onEndReachedThreshold={0.5}
      onEndReached={hasMore ? onLoadMore : null}
      ListFooterComponent={
        hasMore ? <ActivityIndicator color={colors?.primary} /> : null
      }
    />
  );
};

export default CustomFlatList;
