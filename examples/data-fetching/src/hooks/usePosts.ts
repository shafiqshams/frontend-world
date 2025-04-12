import { useState, useEffect } from 'react'
import { Post } from '../Types/post'
import { BASE_URL } from '../config/appConfig';

export const usePosts = () => {

   const [posts, setPosts] = useState<Post[]>([])
   const [isLoading, setIsloading] = useState<boolean>(false);
   const [error, setError] = useState<Error | null>(null);

   const fetchPosts = async () => {
      setIsloading(true);
      try {
         const res = await fetch(`${BASE_URL}/posts}`)
         const posts = await (res.json()) as Post[]
         setPosts(posts);
      } catch (e) {
         const error = e instanceof Error ? e : new Error("Something went wrong");
         setError(error);
      } finally {
         setIsloading(false);
      }
   }

   useEffect(() => {
      fetchPosts()
   }, [])

   return { posts, isLoading, error }

}