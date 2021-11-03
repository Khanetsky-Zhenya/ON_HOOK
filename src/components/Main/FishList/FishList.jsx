import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../../redux/constants";

import styles from "./FishList.module.css";
import { FishMan } from "../FishMan/FishMan";
export const FishList = () => {
  const dispatch = useDispatch();
  const allFishMans = useSelector((state) => state.fishMans);
  const [fishMans, setFishMans] = useState([]);

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_FISHMANS });
  }, []);

  useEffect(() => {
    setFishMans(allFishMans);
  }, [allFishMans]);

  const onFilter = (e) => {
    const myRegion = e.target.value;
    const newFishMans = allFishMans.filter((item) =>  item.myRegion.includes(myRegion));
    newFishMans.sort((a, b) => b.totalCatch - a.totalCatch);
    const topFishmans = newFishMans.slice(0, 6);
    setFishMans(topFishmans);
  };

  return (
    <div className={styles.List}>
      <div className={styles.List__Header}>
        <h2 className={styles.List__Title}>топ рыболовов</h2>
        <select onChange={onFilter}>
          <option className={styles.List__SubTitle}>Выберете область:</option>
          <option value="brest">Брестская область</option>
          <option value="vitebsk">Витебская область</option>
          <option value="grodno">Гродненская область</option>
          <option value="gomel">Гомельская область</option>
          <option value="mogilev">Могилевская область</option>
          <option value="minsk">Минская область</option>
        </select>
      </div>
      <div className={styles.List__UserTop}>
        <FishMan fishmans={fishMans} />
      </div>
    </div>
  );
};
