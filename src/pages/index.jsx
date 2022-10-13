import { dehydrate, QueryClient } from 'react-query';
import AppLayout from '@/components/layout/AppLayout';
import { queryKeys } from '@/react-query/constants';
import { getHome } from '@/apis/home';
import { useHomeQuery } from '@/components/home/hooks/useHome';

const Home = () => {
  const data = useHomeQuery();

  console.log(data);

  return <AppLayout>처음 화면</AppLayout>;
};
export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.home, getHome);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
export default Home;
