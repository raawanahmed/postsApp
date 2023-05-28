"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/nav-bar.module.scss";
import { AiFillHome, AiFillHeart } from "react-icons/ai";

export default function NavBar() {
  const path = usePathname();

  const [widthOfScreen, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [homeIconColor, setHomeIconColor] = useState("");
  const [likedIconColor, setLikedIconColor] = useState("");

  const handleHomeIconClick = () => {
    setHomeIconColor("black");
    setLikedIconColor("white");
  };

  const handleLikedIconClick = () => {
    setHomeIconColor("white");
    setLikedIconColor("black");
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      setWidth(window.innerWidth);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  return (
    <nav className={styles.navbar}>
      <Link
        className={path === "/" ? styles.active : styles.notActive}
        href="/"
      >
        {widthOfScreen <= 600 ? (
          <AiFillHome
            className={styles.icons}
            color={homeIconColor}
            onClick={handleHomeIconClick}
          />
        ) : (
          "Home"
        )}
      </Link>

      <Link
        className={path.includes("favPosts") ? styles.active : styles.notActive}
        href="/favPosts"
      >
        {widthOfScreen <= 600 ? (
          <AiFillHeart
            className={styles.icons}
            color={likedIconColor}
            onClick={handleLikedIconClick}
          />
        ) : (
          "Liked"
        )}
      </Link>
    </nav>
  );
}
