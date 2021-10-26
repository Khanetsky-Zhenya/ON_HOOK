import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import styles from "./WaterPage.module.css";
import { useParams } from "react-router-dom";

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
          <div>Название: {currentWater.name}</div>
          <div>Краткое описание: {currentWater.shortDescription}</div>
          <div>Площадь {currentWater.square}</div>
          <div> Максимальная глубина {currentWater.depth}</div>
          <div>Длина {currentWater.length}</div>
          <div>Краткое описание: {currentWater.fullDescription}</div>
        </div>
      ) : (
        <div>Идет загрузка водоема</div>
      )}
    </div>
  );
};
