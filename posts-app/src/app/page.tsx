"use client";

import styles from "./page.module.css";
import { usePostContext } from "@/context/context";
import ListOfPosts from "@/components/ListOfPosts";
import { useEffect } from "react";
export default function Home() {
  //throw new Error("waah");
  const { dummyPosts } = usePostContext();
  return (
    <div className={styles.layout}>
      <ListOfPosts postsList={dummyPosts}></ListOfPosts>
    </div>
  );
}
