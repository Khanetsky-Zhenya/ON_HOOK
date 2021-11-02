import React from "react";

import avatar from "../../../assets/images/avatar/avatarUser.png";

import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../../redux/constants";

import styles from "./FishMan.module.css";

export const FishMan = () => {
    const dispatch = useDispatch();

  const allFishMans = useSelector((state) => state.fishMans);

  useEffect(() => {
    setFishMans(allFishMans);
  }, [allFishMans]);

  const [fishMans, setFishMans] = useState(allFishMans);

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_FISHMANS });
  }, []);
  
 
  return (
    <>
      {fishMans.map((item) => {
            return ( <div className={styles.Card}>
              <img className={styles.Card__avatar} src={avatar} alt="your avatar" />
              <div>
                <div className={styles.Card__FullName}>
                  <p className={styles.Card__Name}>{item.name}</p>
                  <p className={styles.Card__SecondName}>{item.secondName}</p>
                </div>
                <p className={styles.Card__FishType}>
                  Вид ловли: <span>{item.fishType}</span>
                </p>
                <p className={styles.Card__Trophy}>
                  Трофей: <span>{item.trophy}</span>
                </p>
                <p className={styles.Card__TotalCatch} >
                  Общий улов: <span>{item.totalCatch} килограмм</span>
                </p>
            </div>
            </div>
           );
          })}
         
    </>
  );
};
