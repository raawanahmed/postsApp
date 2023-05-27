import CircularImage from "@/components/CircularImg";
import PostFooter from "@/components/PostFooter";
import PostHeader from "@/components/PostHeader";
import PostImg from "@/components/PostImg";
import styles from "../styles/list-of-posts.module.css";
import { PostDetails } from "@/types/post";

export default function ListOfPosts({
  postsList,
}: {
  postsList: PostDetails[];
}) {
  return (
    <div>
      {postsList.map((post, idx) => (
        <div className={styles.layout} key={idx}>
          <PostHeader postData={post} />
          <PostImg postData={post} />
          <PostFooter postData={post} />
        </div>
      ))}
    </div>
  );
}
