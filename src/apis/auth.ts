import axios from 'axios';

export const logout = async () => {
  return await axios.get('auth/logout');
};

export const getWhoAmI = async () => {
  return await (
    await axios.get('user/whoami')
  ).data;
};

export interface ILoginParams {
  username: string;
  password: string;
}

export interface ILoginWithTokenParams {
  token: string;
}
export const login = async (params: ILoginParams) => {
  return await axios.get('/getlogin', { params });
};

export const getLoginByToken = async (params: ILoginWithTokenParams) => {
  return (await axios.get('/getloginbytoken', { params })).data;
};
