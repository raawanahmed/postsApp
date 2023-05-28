"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/nav-bar.module.scss";
import { AiFillHome, AiFillHeart } from "react-icons/ai";

export default function NavBar() {
  const path = usePathname();

  const [widthOfScreen, setWidth] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);


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
          />
        )}
      </Link>
    </nav>
  );
}
