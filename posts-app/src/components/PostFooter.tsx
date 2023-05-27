import styles from "../styles/post-footer.module.css";
import { ReactElement } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoChatboxOutline, IoBookmarkOutline } from "react-icons/io5";

export default function PostHeader() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.postLikes}>
          <AiFillHeart className={styles.icon} />
          <span> likes</span>
        </div>
        <div className={styles.postCaptions}>
          <p>captions</p>
        </div>
        <div className={styles.postTags}></div>
        <div className={styles.postComments}>
          <span>View x comments</span>
        </div>
      </footer>
    </div>
  );
}
