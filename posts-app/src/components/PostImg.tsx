import Image from "next/image";
import styles from "../styles/post-img.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PostDetails } from "@/types/post";
export default function PostImg({ postData }: { postData: PostDetails }) {
  return (
    <div className={styles.post}>
      <Image src={postData.postImgLink} alt="" width={500} height={500}></Image>
      <div className={styles.imgFooter}>
        <div>
          <p>{postData.postDescription} </p>
          <h2>{postData.postTitle}</h2>
        </div>
        <div>
        <AiOutlineHeart className={styles.icon} color="white" />
        </div>
      </div>
    </div>
  );
}
