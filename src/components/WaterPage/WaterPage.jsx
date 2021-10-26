import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { ACTIONS } from "../../redux/constants";
import styles from "./WaterPage.module.css";

export const WaterPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentWater = useSelector((state) => {
    return state.waters.find((water) => water.id === Number(id));
  });
  console.log(currentWater);

  useEffect(() => {
    if (!currentWater) {
      dispatch({ type: ACTIONS.GET_WATERS });
    }
  }, []);

  return (
    <div className={styles.waterPage}>
      {currentWater ? (
        <div className={styles.waterWrapper}>
          <div className={styles.waterWrapper_name}>
            Название: {currentWater.name}
          </div>
          <div className={styles.waterWrapper_shortDescr}>
            Краткое описание: {currentWater.shortDescription}
          </div>
          <div className={styles.waterWrapper_square}>
            Площадь: {currentWater.square}
          </div>
          <div className={styles.waterWrapper_depth}>
            Максимальная глубина: {currentWater.depth}
          </div>
          <div className={styles.waterWrapper_length}>
            Длина: {currentWater.length}
          </div>
          <div className={styles.waterWrapper_fullDescr}>
            Полное описание: {currentWater.fullDescription}
          </div>
        </div>
      ) : (
        <div>Идет загрузка водоема</div>
      )}
    </div>
  );
};
