import React from "react";
import { Link } from "react-router-dom";

import styles from "./Rating.module.css";

export const Rating = (props) => {
  const { title } = props;
  return (
    <div className={styles.Rating}>
      <h2 className={styles.Rating__title}>{title}</h2>
      <p className={styles.Rating__name}>название</p>
      <p className={styles.Rating__name}>название</p>
      <p className={styles.Rating__name}>название</p>
      <p className={styles.Rating__name}>название</p>
      <p className={styles.Rating__name}>название</p>
    </div>
  );
};
