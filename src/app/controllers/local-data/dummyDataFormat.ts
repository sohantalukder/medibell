import {IUnformattedAPIResponse} from '@entity-models/api/apiResponse';

export const dummyDataFormat = <P>(response: IUnformattedAPIResponse<P>) => {
  const formatRes: any = {
    ...response,
    body: response.data,
    status: response.success,
  };
  delete formatRes?.data;
  delete formatRes?.success;
  return formatRes;
};
