import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../../redux/constants";

import styles from "./FishList.module.css";
import { FishMan } from "../FishMan/FishMan";
export const FishList = () => {
  const dispatch = useDispatch();

  const allFishMans = useSelector((state) => state.fishMans);

  useEffect(() => {
    setFishMans(allFishMans);
  }, [allFishMans]);

  const [fishMans, setFishMans] = useState(allFishMans);

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_FISHMANS });
  }, []);

  const onFilter = (myRegion) => {
    const newFishMans = allFishMans.filter((item) => item.myRegion.includes(myRegion));
    setFishMans(newFishMans);
  };

  return (
    <div className={styles.List}>
      <div className={styles.List__Header}>
        <h2 className={styles.List__Title}>топ рыболовов</h2>
          <select >
            <option className={styles.List__SubTitle}>Выберете область:</option>
            <option>Брестская область</option>
            <option>Витебская область</option>      
            <option>Гродненская область</option>
            <option>Гомельская область</option>
            <option>Могилевская область</option>      
            <option>Минская область</option>
          </select>
      </div>
      <div className={styles.List__UserTop}>
        <div className={styles.List__UserTopFlex}>
          <FishMan/>
        </div>
        <div>


        </div>
      </div>
    </div>
  );
};
