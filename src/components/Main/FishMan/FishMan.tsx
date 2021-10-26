import React from "react";

import avatar from "../../../assets/images/avatar/avatarUser.png";

import styles from "./FishMan.module.css";

export const FishMan = () => {
  return (
    <div className={styles.Card}>
      <img className={styles.Card__avatar} src={avatar} alt="your avatar" />
      <div>
        <div className={styles.Card__FullName}>
          <p className={styles.Card__Name}>Пётр</p>
          <p className={styles.Card__SecondName}>Петров</p>
        </div>
        <p className={styles.Card__FishType}>
          Вид ловли: <span>Фидер</span>
        </p>
        <p className={styles.Card__Trophy}>
          Трофей: <span>Лещ, 5кг</span>
        </p>
        <p className={styles.Card__TotalCatch}>
          Общий улов: <span>23кг</span>
        </p>
      </div>
    </div>
  );
};
