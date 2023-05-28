"use client";

import styles from "./page.module.css";
//import dummyPosts from "@/types/post";
import { usePostContext } from "@/context/context";
import ListOfPosts from "@/components/ListOfPosts";
export default function Home() {

  const { dummyPosts } = usePostContext();
  return (
    <div className={styles.layout}>
      <ListOfPosts postsList={dummyPosts}></ListOfPosts>
    </div>
  );
}
