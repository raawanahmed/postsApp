import Image from "next/image";
import styles from "../styles/post-header.module.scss";
function CircularImage({ userProfilePic }: { userProfilePic: string }) {
  return (
    <Image
      className={styles.circularImg}
      width={60}
      height={60}
      src={userProfilePic}
      alt={"User Profile Picture"}
    />
  );
}
export default CircularImage;
