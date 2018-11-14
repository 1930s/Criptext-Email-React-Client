/*global process */
export const appDomain =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_APPDOMAIN
    : 'criptext.com';

export const DEVICE_TYPE = 1;

export const SocketCommand = {
  DATA_UPLOADED: 204
};
