import Image from "next/image";
import styles from "../styles/post-img.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
export default function PostImg() {
  return (
    <div className={styles.post}>
      <Image
        src="https://images.unsplash.com/photo-1685013639823-62388d0e9e46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80"
        alt=""
        width={500}
        height={500}
        
      ></Image>
      <div className={styles.imgFooter}>
        <AiFillHeart
          className={`${styles.icon}`}
        />
      </div>
    </div>
  );
}
