interface COMMON_MAIN_STATE {
  isLoading: boolean;
  page: number;
  perPage: number;
  hasMore: boolean;
  isLoadingMore: boolean;
  refreshing: boolean;
  order: 'asc' | 'desc';
  query: string | null;
  hasInfiniteScroll: boolean;
  itemAppendDirection: 'last' | 'first';
  firstRender: boolean;
}
interface COMMON_STATE<T> extends COMMON_MAIN_STATE {
  list: T[];
  extraData?: T;
}

interface COMMON_REDUCER<T> {
  isGetting?: () => void;
  isGettingSuccess?: (data: T[]) => void;
  isGettingError?: (error: string) => void;
  isGettingMore?: () => void;
  isRefresh?: () => void;
  isStateUpdate?: (updates: Partial<COMMON_STATE<T>>) => void;
  queryChange?: (query: string) => void;
  addAction?: (item: T) => void;
  deleteAction?: (id: string | number) => void;
  updateAction?: (id: string | number, item: Partial<T>) => void;
  clearAction: () => void;
}
interface PAYLOAD_ACTION<T> {
  type: string;
  payload: T;
}

export type {COMMON_STATE, COMMON_REDUCER, COMMON_MAIN_STATE, PAYLOAD_ACTION};
