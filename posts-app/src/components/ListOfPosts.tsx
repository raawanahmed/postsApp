import PostFooter from "@/components/PostFooter";
import PostHeader from "@/components/PostHeader";
import PostImg from "@/components/PostImg";
import styles from "../styles/list-of-posts.module.scss";
import { PostDetails } from "@/types/post";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";
export default function ListOfPosts({
  postsList,
}: {
  postsList: PostDetails[];
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (postsList && postsList.length > 0) {
      setIsLoading(false);
    }
    if (postsList.length == 0) {
      setIsLoading(false);
    }
  }, [postsList]);

  if (isLoading) {
    return <Loading />;
  }

  if (postsList.length === 0) {
    return <p className={styles.noFavPosts}>There are no posts</p>;
  }

  return (
    <div>
      {postsList.map((post, idx) => (
        <div className={styles.layout} key={idx}>
          <PostHeader postData={post} />
          <PostImg postData={post} />
          <PostFooter postData={post} />
        </div>
      ))}
    </div>
  );
}
