type statusCodes =
  | 100
  | 101
  | 102
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 405
  | 408
  | 413
  | 414
  | 426
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511;
interface IApiResponse<P> {
  body: P;
  message: string;
  status: boolean;
  responseCode: statusCodes;
  tokens?: string;
}
interface IUnformattedAPIResponse<P> {
  data: P;
  extraData?: unknown;
  message: string;
  success: boolean;
  responseCode: string | number;
}
export type {IApiResponse, IUnformattedAPIResponse};
