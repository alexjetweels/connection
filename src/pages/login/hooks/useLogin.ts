import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { ILoginParams } from '~/apis/auth';
import { COOKIES } from '~/configs/cookies';
import path from '~/configs/path';
import { QUERY_KEY } from '~/configs/queryKey';

export const useLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (params: ILoginParams) => {
    Cookies.set(COOKIES.TOKEN, JSON.stringify(params));
  };

  return useMutation({
    mutationKey: [QUERY_KEY.LOG_IN],
    mutationFn: async (params: ILoginParams) => await handleLogin(params),
    retry: 0,
    onSuccess: (data) => {
      navigate(path.PUNCH_CLOCK);
    },
  });
};
