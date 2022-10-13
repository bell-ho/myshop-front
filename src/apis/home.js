import { axios } from '@/utils/axios';

export const getHome = async () => {
  const { data } = await axios.get(`/api/v1/home`);
  return data;
};
