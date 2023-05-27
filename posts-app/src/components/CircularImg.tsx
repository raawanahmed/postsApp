
import Image from 'next/image'
import styles from "../styles/post-header.module.css";
function CircularImage() {
  return (
    <Image className={styles.circularImg} width={60} height={60} src='https://images.unsplash.com/profile-1629712901452-511518ea34a5image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff' alt={""} />
  );
}
export default CircularImage;
