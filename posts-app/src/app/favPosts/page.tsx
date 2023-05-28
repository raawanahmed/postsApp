"use client";

import styles from "../page.module.css";
import { usePostContext } from "@/context/context";
import ListOfPosts from "@/components/ListOfPosts";
import Loading from "@/components/LoadingPosts";

export default function Home() {
  const { dummyPosts } = usePostContext();
  const favoritePosts = dummyPosts.filter((post) => post.isPostFav);

  return (
    <div className={styles.layout}>
      {dummyPosts == null ? (
        <Loading />
      ) : (
        <ListOfPosts postsList={favoritePosts} />
      )}
    </div>
  );
}
