import { Post } from "../Types/post"
import { PostCard } from "./PostCard"

interface PostsListProps {
   posts: Post[]
}

const PostsList = ({ posts }: PostsListProps) => {

   return (
      <div>
         {posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
   )

}

export default PostsList