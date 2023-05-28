"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/nav-bar.module.css";
import { AiFillHome, AiFillHeart } from "react-icons/ai";

export default function NavBar() {
  const path = usePathname();

  const [widthOfScreen, setWidth] = useState<number>(0);
  const [homeIconColor, setHomeIconColor] = useState("black");
  const [lickedIconColor, setLikedIconColor] = useState("white");

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
    window.addEventListener("resize", handleResize);
    setWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
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
            color={lickedIconColor}
            onClick={handleLikedIconClick}
          />
        ) : (
          "Liked"
        )}
      </Link>
    </nav>
  );
}
