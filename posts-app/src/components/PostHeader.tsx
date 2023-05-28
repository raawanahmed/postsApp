import { BsThreeDots } from "react-icons/bs";
import styles from "../styles/post-header.module.scss";
import CircularImage from "./CircularImg";
import { PostDetails } from "@/types/post";
export default function PostHeader({ postData }: { postData: PostDetails }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.imgWithText}>
        <CircularImage userPP={postData.profileImgLink}></CircularImage>
        <div>
          <p className={styles.name}> {postData.userFullName}</p>
          <p className={styles.username}>{postData.userName}</p>
        </div>
      </div>
      <BsThreeDots size={25} color="black" style={{  marginRight: 15, marginTop:10}}></BsThreeDots>
    </div>
  );
}
