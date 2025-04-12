import { usePosts } from "../hooks/usePosts";
import Error from "./Error";
import Loading from "./Loading";
import PostsList from "./PostsList";
const DataFetching = () => {

   const { posts, isLoading, error, refetch } = usePosts();

   return (
      <div>
         <h3>Data Fetching</h3>
         {isLoading && <Loading />}
         {error &&
            <>
               <Error error={error} />
               <button onClick={refetch}>Retry</button>
            </>
         }
         <PostsList posts={posts} />
      </div>
   )
}

export default DataFetching;