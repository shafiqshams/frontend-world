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

   useEffect(() => {
      const fetchPost = async () => {
         setIsLoading(true)

         try {
            const response = await fetch(`${BASE_URL}/posts`);
            const posts = (await response.json()) as Post[]
            setPosts(posts)
         } catch (error) {
            if (error instanceof Error) {
               setError(error)
            }
         } finally {
            setIsLoading(false)
         }

      }

      fetchPost();
   }, [])

   if (isLoading) {
      return <p>Loading ...</p>
   }

   if (error) {
      return <p>Something went wrong</p>
   }

   return (
      <div>
         <h3>Data Fetching</h3>
         <ul>
            {posts.map((post) => {
               return <li key={post.id}>{post.title}</li>
            })}
         </ul>
      </div>
   )
}

export default DataFetching;