import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constants";
import { useSelector } from "react-redux";
import styles from "./WaterPage.module.css";
import { useParams } from "react-router-dom";

export const WaterPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_WATERS });
  }, []);

  const currentWater = useSelector((state) => {
    return state.waters.find((water) => water.id === Number(id));
  });
  return (
    <div className={styles.waterPage}>
      <h2 className={styles.waterPage__title}>
        ТУТ должна быть страница конкретного водоема с его описанием
      </h2>
    </div>
  );
};
