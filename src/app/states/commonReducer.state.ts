import {
  COMMON_MAIN_STATE,
  COMMON_STATE,
  PAYLOAD_ACTION,
} from '@entity-models/redux/redux.types';
import isEmpty from '@helper/utilities/isEmpty.utility';

const commonReducers = {
  isGetting: (state: COMMON_MAIN_STATE) => {
    state.isLoading = true;
    state.firstRender = true;
  },
  isGettingSuccess: <T>(
    state: COMMON_STATE<T>,
    {payload}: PAYLOAD_ACTION<any>,
  ) => {
    const {body} = payload as any;
    let list = [];
    if (state.page > 1) {
      list = (state.list || []).concat(Array.isArray(body) ? body : []);
    } else {
      list = Array.isArray(body) ? body : [];
    }
    state.isLoadingMore = false;
    state.refreshing = false;
    state.firstRender = true;
    state.extraData = {...payload?.metadata};
    state.isLoading = false;
    state.list = [...list];
    state.page = state.page + 1;
    state.hasMore = body?.length >= state.perPage ? true : false;
  },
  addAction: <T>(state: COMMON_STATE<T>, {payload}: PAYLOAD_ACTION<T>) => {
    if (!isEmpty(payload)) {
      state.list.unshift(payload);
    }
  },
  updateAction: <T, P>(
    state: COMMON_STATE<T>,
    {payload}: PAYLOAD_ACTION<P>,
  ) => {
    const {index, id, item} = payload as {index?: number; id?: string; item: T};

    if (index !== undefined) {
      state.list[index] = item as T;
    } else {
      state.list = state.list.map((_i: T) =>
        (_i as any)?.id === id ? (item as T) : _i,
      );
    }
  },
  deleteAction: <T, P>(
    state: COMMON_STATE<T>,
    {payload}: PAYLOAD_ACTION<P>,
  ) => {
    const {index, id} = payload as {index?: number; id?: string};
    if (index || index === 0) {
      state.list.splice(index, 1);
      return;
    } else {
      state.list = state.list.filter((_i: any) => _i?._id !== id);
    }
  },
  isGettingError: (state: COMMON_MAIN_STATE) => {
    state.isLoadingMore = false;
    state.refreshing = false;
    state.isLoading = false;
  },
  isGettingMore: (state: COMMON_MAIN_STATE) => {
    state.isLoadingMore = true;
  },
  isRefresh: (state: COMMON_MAIN_STATE) => {
    state.refreshing = true;
    state.isLoadingMore = false;
    state.hasMore = false;
    state.page = 1;
    state.perPage = 10;
  },
  isStateUpdate: <T>(state: COMMON_STATE<T>, {payload}: PAYLOAD_ACTION<T>) => {
    state = {...state, ...payload};
  },
  queryChange: <T, P>(state: COMMON_STATE<T>, {payload}: PAYLOAD_ACTION<P>) => {
    const {page, perPage, query} = (payload as {
      page: number;
      perPage: number;
      query: string | null;
    }) || {
      page: 1,
      perPage: 10,
      query: null,
    };
    state.isLoading = true;
    state.hasMore = false;
    state.page = page;
    state.perPage = perPage;
    state.query = query;
    state.list = [];
  },
};

export default commonReducers;
