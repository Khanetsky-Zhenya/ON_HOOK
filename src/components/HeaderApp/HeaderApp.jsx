import React from "react";
import styles from "./HeaderApp.module.css";

export const HeaderApp = (props) => {
  const { title } = props;
  return (
    <div className={styles.header}>
      <h2 className={styles.header__title}>{title}</h2>
      <div className={styles.header__separator}></div>
      <p className={styles.header__subTitle}>первый сайт рыбака</p>
    </div>
  );
};
