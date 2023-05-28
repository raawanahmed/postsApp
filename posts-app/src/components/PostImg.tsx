"use client";
import Image from "next/image";
import styles from "../styles/post-img.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PostDetails } from "@/types/post";
import { usePostContext } from "@/context/context";
export default function PostImg({ postData }: { postData: PostDetails }) {
  const postContext = usePostContext();
  const toggleIsFav = (postId: string, isFav: boolean) => {
    postContext.toggleIsFavPost(postId, isFav);
    console.log("postsList After: ", postContext.dummyPosts);
  };

  return (
    <div className={styles.post}>
      <Image src={postData.postImgLink} alt="" width={500} height={500}></Image>
      <div className={styles.imgFooter}>
        <div>
          <p>{postData.postDescription} </p>
          <h2>{postData.postTitle}</h2>
        </div>
        <div>
          {postData.isPostFav ? (
            <AiFillHeart
              className={styles.icon}
              color="red"
              onClick={() => toggleIsFav(postData.id, !postData.isPostFav)}
            />
          ) : (
            <AiOutlineHeart
              className={styles.icon}
              color="white"
              onClick={() => toggleIsFav(postData.id, !postData.isPostFav)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
