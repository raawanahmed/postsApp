import React from "react";
import styles from "../styles/loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <h2>Loading...</h2>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
