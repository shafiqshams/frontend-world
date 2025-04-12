import { useEffect, useState } from "react";
import { BASE_URL } from "../config/appConfig";


interface Post {
   id: number;
   title: string;
}

const DataFetching = () => {

   const [posts, setPosts] = useState<Post[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<Error | null>(null);

   const fetchPost = async () => {
      setIsLoading(true)

      try {
         const response = await fetch(`${BASE_URL}/posts`);
         if (!response.ok) {
            throw new Error("HTTP error, request failed")
         }
         const posts = (await response.json()) as Post[]
         setPosts(posts)
      } catch (e) {
         const error = e instanceof Error ? e : new Error("Something went wrong");
         setError(error)
      } finally {
         setIsLoading(false)
      }

   }

   useEffect(() => {
      fetchPost();
   }, [])

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