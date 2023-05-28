import PostFooter from "@/components/PostFooter";
import PostHeader from "@/components/PostHeader";
import PostImg from "@/components/PostImg";
import styles from "../styles/list-of-posts.module.scss";
import { PostDetails } from "@/types/post";
import LoadingPosts from "./LoadingPosts";
export default function ListOfPosts({
  postsList,
}: {
  postsList: PostDetails[];
}) {
  return (
    <>
      {postsList == null ? (
        <LoadingPosts />
      ) : postsList && postsList.length > 0 ? (
        <div>
          {postsList.map((post, idx) => (
            <div className={styles.layout} key={idx}>
              <PostHeader postData={post} />
              <PostImg postData={post} />
              <PostFooter postData={post} />
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noFavPosts}>There is no liked posts!</p>
      )}
    </>
  );
}
