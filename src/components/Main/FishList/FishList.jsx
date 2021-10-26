import React from "react";
import styles from "./FishList.module.css";
import { FishMan } from "../FishMan/FishMan";
export const FishList = () => {
  return (
    <div className={styles.List}>
      <div className={styles.List__Header}>
        <h2 className={styles.List__Title}>топ рыболовов</h2>
        <p className={styles.List__SubTitle}>витебской области</p>
      </div>
      <div className={styles.List__UserTop}>
        <div>
          <FishMan />
          <FishMan />
          <FishMan />
        </div>
        <div>
          <FishMan />
          <FishMan />
          <FishMan />
        </div>
      </div>
    </div>
  );
};
