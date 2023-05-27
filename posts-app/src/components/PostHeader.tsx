import { BsThreeDots } from "react-icons/bs";
import styles from "../styles/post-header.module.css";
import CircularImage from "./CircularImg";
export default function PostHeader() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.imgWithText}>
        <CircularImage></CircularImage>
        <div>
          <p className={styles.name}> Rewrew</p>
          <p className={styles.username}>Jerry19</p>
        </div>
      </div>
      <BsThreeDots size={25} color="black" style={{  marginRight: 15, marginTop:10}}></BsThreeDots>
    </div>
  );
}
