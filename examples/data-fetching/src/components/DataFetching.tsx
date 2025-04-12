import { usePosts } from "../hooks/usePosts";

const DataFetching = () => {

   const { posts, isLoading, error } = usePosts();

   return (
      <div>
         <h3>Data Fetching</h3>
         {isLoading && <p>Loading...</p>}
         {error && <p>{error.message}</p>}
         <ul>
            {posts.map((post) => {
               return <li key={post.id}>{post.title}</li>
            })}
         </ul>
      </div>
   )
}

export default DataFetching;