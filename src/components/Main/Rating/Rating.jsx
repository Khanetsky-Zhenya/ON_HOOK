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
      <h2 className={styles.Rating__title}>{title}</h2>
      {waters.map((item) => {
        return (
          <div
            className={styles.Rating__name}
            onClick={() => redirectToWater(item.id)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
