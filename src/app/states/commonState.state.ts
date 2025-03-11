import {COMMON_STATE} from '@entity-models/redux/redux.types';

const commonStates: COMMON_STATE<any> = {
  list: [],
  isLoading: true,
  page: 0,
  perPage: 50,
  hasMore: false,
  isLoadingMore: false,
  refreshing: false,
  order: 'asc',
  query: '',
  hasInfiniteScroll: false,
  itemAppendDirection: 'last',
  firstRender: false,
  extraData: null,
};

export default commonStates;
