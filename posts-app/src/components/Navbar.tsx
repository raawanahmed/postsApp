"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/nav-bar.module.scss";
import { AiFillHome, AiFillHeart } from "react-icons/ai";

export default function NavBar() {
  const path = usePathname();

  const [widthOfScreen, setWidth] = useState<number>(0);
  const [homeIconColor, setHomeIconColor] = useState("");
  const [likedIconColor, setLikedIconColor] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const handleHomeIconClick = useCallback(() => {
    setHomeIconColor("black");
    setLikedIconColor("white");
  }, []);

  const handleLikedIconClick = useCallback(() => {
    setHomeIconColor("white");
    setLikedIconColor("black");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    setIsLoaded(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <nav className={styles.navbar}>
      <Link
        className={path === "/" ? styles.active : styles.notActive}
        href="/"
      >
        {widthOfScreen > 700 ? (
          <span>Home</span>
        ) : (
          <AiFillHome
            className={styles.icons}
            color={homeIconColor}
            onClick={handleHomeIconClick}
          />
        )}
      </Link>

      <Link
        className={path.includes("favPosts") ? styles.active : styles.notActive}
        href="/favPosts"
      >
        {widthOfScreen > 700 ? (
          <span>Liked</span>
        ) : (
          <AiFillHeart
            className={styles.icons}
            color={likedIconColor}
            onClick={handleLikedIconClick}
          />
        )}
      </Link>
    </nav>
  );
}
