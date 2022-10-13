import { useQuery } from 'react-query';
import { queryKeys } from '@/react-query/constants';
import { getHome } from '@/apis/home';
import { commentOptions } from '@/react-query/queryOptions';

export function useHomeQuery() {
  const { data = [] } = useQuery(queryKeys.home, getHome, {
    ...commentOptions(1000, 300000),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchInterval: 60000,
  });
  return data;
}
