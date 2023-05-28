"use client";

import styles from "../page.module.css";
import { usePostContext } from "@/context/context";
import ListOfPosts from "@/components/ListOfPosts";

export default function Home() {
  const { dummyPosts } = usePostContext();
  const favoritePosts = dummyPosts.filter((post) => post.isPostFav);

  return (
    <div className={styles.layout}>
      {favoritePosts.length > 0 ? (
        <ListOfPosts postsList={favoritePosts} />
      ) : (
        <p className={styles.noFavPosts}>There is no liked posts!</p>
      )}
    </div>
  );
}
