import CircularImage from "@/components/CircularImg";
import PostFooter from "@/components/PostFooter";
import PostHeader from "@/components/PostHeader";
import PostImg from "@/components/PostImg";
import styles from "./page.module.css";
import { PostDetails } from "@/types/post";

export default function ListOfPosts({ postsList }: { postsList: PostDetails[] }) {
  return (
    <div>
      {postsList.map((post, idx) => (
        <div key={idx}>
          <PostHeader postData={post} />
          <PostImg postImg={post.postImgLink} />
          <PostFooter postData={post} />
        </div>
      ))}
    </div>
  );
}
