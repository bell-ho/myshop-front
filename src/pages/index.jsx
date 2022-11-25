import { dehydrate, QueryClient } from 'react-query';
import AppLayout from '@/components/layout/AppLayout';
import { queryKeys } from '@/react-query/constants';
import { getHome } from '@/apis/home';
import { useHomeQuery } from '@/components/home/hooks/useHome';

const Home = () => {
  return <AppLayout></AppLayout>;
};
export default Home;
