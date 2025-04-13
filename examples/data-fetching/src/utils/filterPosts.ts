import { Post } from "../Types/post";


export const filterPosts = (posts: Post[], searchPost: string): Post[] => {
   const filteredPosts = searchPost ? posts.filter((post) => {
      return (post.title).includes(searchPost)
   }) : posts;

   return filteredPosts;
}