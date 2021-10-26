import React from "react";

import styles from "./WaterPage.module.css";

export const WaterPage = (props) => {
  const {
    name,
    shortDescription,
    rating,
    square,
    depth,
    length,
    fullDescription,
  } = props;

  return (
    <div className={styles.waterPage}>
      <h2 className={styles.waterPage__title}>
        ТУТ должна быть страница конкретного водоема с его описанием
      </h2>
    </div>
  );
};
