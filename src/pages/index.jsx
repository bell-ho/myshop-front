import { dehydrate, QueryClient } from 'react-query';

const Home = () => {
  return (
    <div>
      <div>첫 화면2</div>
    </div>
  );
};
export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  // await queryClient.prefetchInfiniteQuery('posts', () => loadPostsAPI());
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
export default Home;
