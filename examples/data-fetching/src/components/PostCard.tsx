import { Post } from '../Types/post'

interface PostCardProps {
   post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
   return (
      <div>
         {post.title}
      </div>
   )
}
