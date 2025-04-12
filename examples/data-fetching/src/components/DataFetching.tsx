import { usePosts } from "../hooks/usePosts";
import Error from "./Error";
import Loading from "./Loading";
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
         <ul>
            {posts.map((post) => {
               return <li key={post.id}>{post.title}</li>
            })}
         </ul>
      </div>
   )
}

export default DataFetching;