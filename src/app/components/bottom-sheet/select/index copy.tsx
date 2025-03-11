/* eslint-disable react-hooks/exhaustive-deps */
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  globalStyles,
  customPadding,
} from '../../../assets/styles/global.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import isEmpty from '../../../helper/utilities/isEmpty.utility';
import EmptyContent from '../../empty-content/EmptyContent.component';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import useIsMounted from '@helper/hooks/useIsMounted.hook';
import LeftArrowIcon from '@icons/LeftArrow.icon';
import CheckIcon from '@icons/Check.icon';
// import {debounceHandler} from '../../../helper/hooks/debouce.hook';
interface optionsProps {
  titleField: 'value' | 'FULL__DATA';
  item: any;
  name?: string;
  formatOptions?: Function;
  onSelect?: (name: any, value: any) => void;
  titleFieldFormatter?: Function;
  selectedValue?: any;
}
interface componentProps {
  onChange: (params: any) => void;
  name?: string;
  extraData: {getData: boolean; data: any[]};
  options?: {
    search?: boolean;
    refreshing?: boolean;
    data?: any[];
    selectedValue?: string;
    titleField?: 'value' | 'FULL__DATA' | any;
    titleFieldFormatter?: Function;
    formatter?: any;
    flatList?: boolean;
    title?: string;
    refreshButton?: boolean;
    getDataHandler: (
      params: {
        page: number;
        perPage: number;
        query?: any;
      },
      callback: (res: any) => void,
    ) => void;
  };

  perPageNumber?: number;
}
const EachOption: React.FC<optionsProps> = ({
  onSelect,
  item,
  titleField = 'FULL__DATA',
  titleFieldFormatter,
  name,
  selectedValue,
}) => {
  const colors = useTheme().colors as Colors;
  const [select, setSelect] = useState(
    (titleField === 'FULL__DATA' ? item : item?._id) ===
      (titleField === 'FULL__DATA' ? selectedValue : selectedValue?._id)
      ? true
      : false,
  );
  const onPress = () => {
    setSelect(!select);
    onSelect && onSelect(item, name);
    global.showBottomSheet({flag: false});
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[globalStyles.rowBetween, {...customPadding(10, 0, 10, 0)}]}>
      <Text
        style={[
          typographies(colors).bodyMediumMedium,
          {color: colors.default1},
        ]}>
        {titleFieldFormatter
          ? titleFieldFormatter(item)
          : titleField === 'FULL__DATA'
          ? item
          : item[titleField]}
      </Text>
      {select && <CheckIcon fill={colors.primary} height={16} width={16} />}
    </TouchableOpacity>
  );
};
const BottomSheetSelect: React.FC<componentProps> = ({
  options = {},
  perPageNumber = 10,
  onChange = () => {},
  name = '',
  extraData = {},
}) => {
  const {
    // search = false,
    refreshing = false,
    data = [],
    titleField = 'FULL__DATA',
    getDataHandler = () => {},
    formatter,
    titleFieldFormatter,
    flatList = false,
    title = '',
    selectedValue = '',
    refreshButton = false,
  } = options;
  const isMount = useIsMounted();
  const page = useRef<number>(isEmpty(data) ? 1 : 2);
  // const inputRef = useRef<any>();
  const searchText = useRef<string>('');
  const colors = useTheme().colors as Colors;
  const hasMore = useRef<boolean>(false);
  const perPage = useRef<number>(perPageNumber);
  const [list, setList] = useState<any[]>(data || []);
  const [isLoading, setIsLoading] = useState<boolean>(
    isEmpty(data) ? true : false,
  );
  const [isGettingMore, setIsGettingMore] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const apiCall = () => {
    getDataHandler(
      {
        page: page.current,
        perPage: perPage.current,
        search: searchText.current,
      } as {
        page: number;
        perPage: number;
        query?: any;
      },
      (res: any) => {
        if (res.status) {
          let mergeData: any[] = [...list];
          let body: any[] = [];
          if (res.body) {
            body = [...res.body];
          }
          if (page.current === 1) {
            mergeData = [];
          }
          if ('append') {
            mergeData = [...mergeData, ...body];
          } else {
            mergeData = [...body, ...mergeData];
          }
          setList(mergeData);

          if (res.body && res.body.length >= perPage.current) {
            hasMore.current = true;
            page.current = page.current + 1;
          } else {
            hasMore.current = false;
          }
        }
        setIsRefreshing(false);
        setIsGettingMore(false);
        setIsLoading(false);
      },
    );
  };

  useEffect(() => {
    isEmpty(data) && apiCall();
  }, []);
  useEffect(() => {
    if (isMount && isGettingMore) {
      apiCall();
    }
  }, [isGettingMore]);
  // const handleSetSearch = (value: string) => {
  //   searchText.current = value;
  //   page.current = 1;
  //   perPage.current = perPageNumber;
  //   apiCall();
  // };
  // const handleDebounce = debounceHandler(
  //   (value: string) => handleSetSearch(value),
  //   500,
  // );
  const onRefresh = () => {
    searchText.current = '';
    page.current = 1;
    perPage.current = perPageNumber;
    apiCall();
  };
  const loadMore = () => {
    apiCall();
  };
  useEffect(() => {
    if (extraData.getData) {
      setList(extraData.data as any[]);
    }
  }, [extraData]);
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={flatList ? globalStyles.flexShrink1 : {}}
      keyboardVerticalOffset={flatList ? -120 : 0}
      enabled={true}>
      <View style={{...customPadding(0, 20, 10, 20)}}>
        <View style={styles.topHeaderCont}>
          <View style={styles.topHeader}>
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
                  typographies(colors).bodyLargeSemibold,
                  {color: colors.default1},
                  globalStyles.flexShrink1,
                ]}>
                {title}
              </Text>
            )}
          </View>
          {refreshButton && (
            <TouchableOpacity onPress={onRefresh} activeOpacity={0.5}>
              <Text style={typographies(colors).bodyLargeSemibold}>
                {'Refresh'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        {/* {search && (
          <InputWithIcon
            inputProps={{ref: inputRef}}
            defaultValue={searchText.current}
            style={{...customMargin(8, 0, 2, 0)}}
            leftIcon={<SearchIcon />}
            rightIcon={searchText.current && <CrossIcon />}
            placeholder={placeholders.search}
            rightHandler={() => {
              inputRef.current?.clear();
              handleSetSearch('');
            }}
            onChangeText={handleDebounce}
          />
        )} */}
        {!flatList ? (
          <ScrollView
            refreshControl={
              refreshing ? (
                <RefreshControl
                  onRefresh={onRefresh}
                  refreshing={isRefreshing}
                />
              ) : undefined
            }
            contentContainerStyle={
              list?.length > 0
                ? {...customPadding(8)}
                : globalStyles.emptyFlexBox
            }
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="on-drag">
            {isLoading ? (
              <ActivityIndicator />
            ) : !isEmpty(list) ? (
              list.map((item: any, index: any) => {
                return (
                  <EachOption
                    item={formatter ? formatter(item) : item}
                    name={name}
                    selectedValue={selectedValue}
                    titleFieldFormatter={titleFieldFormatter}
                    titleField={titleField}
                    onSelect={onChange}
                    key={index}
                  />
                );
              })
            ) : (
              <EmptyContent text={'No Data Found!'} />
            )}
          </ScrollView>
        ) : (
          <FlatList
            data={list}
            refreshing={refreshing && isRefreshing}
            onRefresh={refreshing ? onRefresh : undefined}
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
            automaticallyAdjustKeyboardInsets={false}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={
              list?.length > 0
                ? {...customPadding(8)}
                : globalStyles.emptyFlexBox
            }
            ListEmptyComponent={
              isLoading ? (
                <ActivityIndicator />
              ) : (
                <EmptyContent text={'No Data Found!'} />
              )
            }
            initialNumToRender={12}
            renderItem={({item, index}: {item: any; index: number}) => {
              return (
                <EachOption
                  item={formatter ? formatter(item) : item}
                  titleField={titleField}
                  selectedValue={selectedValue}
                  onSelect={onChange}
                  name={name}
                  titleFieldFormatter={titleFieldFormatter}
                  key={index}
                />
              );
            }}
            onEndReachedThreshold={1}
            onEndReached={loadMore}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default BottomSheetSelect;

const styles = StyleSheet.create({
  topHeaderCont: {
    flexDirection: 'row',
    ...customPadding(10, 0, 10),
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
