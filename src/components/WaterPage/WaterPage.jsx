import React, {useEffect} from "react";
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
  console.log(currentWater)

  useEffect(() => {
    if (!currentWater) {
      dispatch({ type: ACTIONS.GET_WATERS });
    }
  }, []);

  return (
    <div className={styles.waterPage}>
      <h2 className={styles.waterPage__title}>
        ТУТ должна быть страница конкретного водоема с его описанием
      </h2>
    </div>
  );
};
