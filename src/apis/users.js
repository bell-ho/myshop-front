import { axios } from '@/utils/axios';

export const signup = async (params) => {
  await axios.post(`/api/v1/members`, params);
};

export const getMembers = async () => {
  const { data } = await axios.get(`/api/v1/members`);
  return data;
};
