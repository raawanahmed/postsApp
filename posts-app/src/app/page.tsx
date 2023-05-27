import CircularImage from "@/components/CircularImg";
import PostFooter from "@/components/PostFooter";
import PostHeader from "@/components/PostHeader";
import PostImg from "@/components/PostImg";
import styles from "./page.module.css";
import dummyPosts, { PostDetails } from "@/types/post";


import ListOfPosts from "@/components/ListOfPosts";
export default function Home() {
  return (
    <div className={styles.layout}>
      <ListOfPosts postsList={dummyPosts}></ListOfPosts>
    </div>
  );
}
