"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import dummyPosts, { PostDetails, postContextType } from "@/types/post";

// create a type of context
const postsContextDefaultValues: postContextType = {
  dummyPosts: [],
  toggleIsFavPost: (postId: string, isFav: boolean) => {
    return false;
  },
};
export const postsContext = createContext<postContextType>(
  postsContextDefaultValues
);
export const usePostContext = () => useContext(postsContext);

type Props = {
  children: ReactNode;
};

export default function PostsContextProvider({ children }: Props) {
  const [postsList, setPostsList] = useState<PostDetails[]>(dummyPosts);
  useEffect(() => {
    const postsOnLocalStorage = localStorage.getItem("posts");
    if (postsOnLocalStorage) {
      setPostsList(JSON.parse(postsOnLocalStorage));
    } else {
      localStorage.setItem("posts", JSON.stringify(dummyPosts));
      setPostsList(dummyPosts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(postsList));
  }, [postsList]);

  const toggleIsFavPost = (postId: string, isFav: boolean) => {
    let isIdFound = false;
    const updatedPostsList = postsList.map((curPost) => {
      if (curPost.id === postId) {
        curPost.isPostFav = isFav;
        curPost.isPostFav ? curPost.numberOfLikes++ : curPost.numberOfLikes--;
        isIdFound = true;
      }
      return curPost;
    });
    setPostsList(updatedPostsList);
    return isIdFound;
  };

  return (
    <postsContext.Provider
      value={{
        dummyPosts: postsList,
        toggleIsFavPost,
      }}
    >
      {children}
    </postsContext.Provider>
  );
}
