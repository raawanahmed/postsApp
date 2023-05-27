import styles from "../styles/post-footer.module.css";
import { ReactElement } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PostDetails } from "@/types/post";
export default function PostHeader({ postData }: { postData: PostDetails }) {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.postLikes}>
          <AiFillHeart className={styles.icon} />
          <span>{postData.numberOfLikes} likes</span>
        </div>
        <div className={styles.postCaptions}>
          <p>{postData.postCaption}</p>
        </div>
        <div className={styles.postTags}>
          {postData.tags?.map((tag, idx) => (
            <span key={idx}>#{tag + " "}</span>
          ))}
        </div>
        <div className={styles.postComments}>
          <span>View {postData.numberOfComments} comments</span>
        </div>
      </footer>
    </div>
  );
}
