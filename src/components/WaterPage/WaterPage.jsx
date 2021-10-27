import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { ACTIONS } from "../../redux/constants";
import styles from "./WaterPage.module.css";

export const WaterPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentWater = useSelector((state) => {
    return state.waters.find((water) => water.id === Number(id));
  });

  useEffect(() => {
    if (!currentWater) {
      dispatch({ type: ACTIONS.GET_WATERS });
    }
  }, []);

  return (
    <div className={styles.waterPage}>
      <Link className={styles.waterPage__nav} to="/">
        <span>Главная</span>
      </Link>
      <span>/</span>
      <Link className={styles.waterPage__nav2} to="/waters">
        <span>Список всех водоемов и рек</span>
      </Link>
      {currentWater ? (
        <div className={styles.waterWrapper}>
          <div className={styles.waterWrapper_name}>
            Название: {currentWater.name}.
          </div>
          <div className={styles.waterWrapper_shortDescr}>
            {currentWater.shortDescription}
          </div>
          <div className={styles.waterWrapper_square}>
            Площадь: {currentWater.square} квадратных километров.
          </div>
          <div className={styles.waterWrapper_depth}>
            Максимальная глубина: {currentWater.depth} метров.
          </div>
          <div className={styles.waterWrapper_length}>
            Длина: {currentWater.length} километров.
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
