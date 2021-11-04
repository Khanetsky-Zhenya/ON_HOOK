import React from "react";

import { useHistory } from "react-router";

import styles from "./Rating.module.css";

export const Rating = (props) => {
  const { title, waters } = props;

  const history = useHistory();

  const redirectToWater = (id) => {
    history.push(`/waters/${id}`);
  };
  return (
    <div className={styles.Rating}>
      <div className={styles.Rating_new}>
        <h2 className={styles.Rating__title}>{title}</h2>
        <div className={styles.Rating__separator}></div>
        <p className={styles.Rating__subTitle}>В этом блоке собран {title} с самыми высокими рейтингами по улову и популярности. Рейтинг создается благодаря рыбакам, которые оставляют отзывы и результаты своих уловов.</p>
      </div>
      <div className={styles.Rating_itemsAll}>{waters.map((item) => {
        return (
          <div
            className={styles.Rating__name}
            onClick={() => redirectToWater(item.id)}
          >
            {item.name}
          </div>
        );
      })}</div>
      
    </div>
  );
};
