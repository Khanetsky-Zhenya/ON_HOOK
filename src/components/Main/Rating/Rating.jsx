import React from "react";

import styles from "./Rating.module.css";

export const Rating = (props) => {
  const { title, waters } = props;
  return (
    <div className={styles.Rating}>
      <h2 className={styles.Rating__title}>{title}</h2>
      {waters.map((item) => {
        return <div className={styles.Rating__name}>{item.name}</div>;
      })}
    </div>
  );
};
