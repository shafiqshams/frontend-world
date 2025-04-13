import { useState } from "react";
import { usePosts } from "../hooks/usePosts";
import Error from "./Error";
import Loading from "./Loading";
import PostsList from "./PostsList";
import { SearchBar } from "./SearchBar";
import { filterPosts } from "../utils/filterPosts";

const DataFetching = () => {
   const { posts, isLoading, error, refetch } = usePosts();
   const [search, setSearch] = useState<string>('');

   const visiblePosts = filterPosts(posts, search);

   return (
      <div>
         <h3>Data Fetching</h3>
         {isLoading && <Loading />}
         {error && <Error error={error} refetch={refetch} />}
         <SearchBar value={search} onChange={setSearch} />
         <PostsList posts={visiblePosts} />
      </div>
   )
}

export default DataFetching;