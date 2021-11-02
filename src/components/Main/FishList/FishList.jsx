import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../../redux/constants";

import styles from "./FishList.module.css";
import { FishMan } from "../FishMan/FishMan";
export const FishList = () => {
  const dispatch = useDispatch();



  const allFishMans = useSelector((state) => state.fishMans);

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_FISHMANS });
  }, []);
  return (
    <div className={styles.List}>
      <div className={styles.List__Header}>
        <h2 className={styles.List__Title}>топ рыболовов</h2>
        <p className={styles.List__SubTitle}>витебской области</p>
        <label>
          <input type="checkbox" /> Выберете область
          <select class=""  > Выберете область
            <option>брестской области</option>
            <option>витебской области</option>      
            <option>гродненской области</option>
            <option>гомельской области</option>
            <option>могилевской области</option>      
            <option>минской области</option>
          </select>
        </label>
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
