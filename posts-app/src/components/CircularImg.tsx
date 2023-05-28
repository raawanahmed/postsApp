
import Image from 'next/image'
import styles from "../styles/post-header.module.scss";
function CircularImage({ userPP }: { userPP: string }) {
  return (
    <Image className={styles.circularImg} width={60} height={60} src={userPP} alt={""} />
  );
}
export default CircularImage;
