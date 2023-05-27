import Image from "next/image";
import styles from "../styles/post-img.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
export default function PostImg({ postImg }: { postImg: string }) {
  return (
    <div className={styles.post}>
      <Image
        src={postImg}
        alt=""
        width={500}
        height={500}
        
      ></Image>
      <div className={styles.imgFooter}>
        <AiOutlineHeart
          className={`${styles.icon}`}
          color="white"
        />
      </div>
    </div>
  );
}
