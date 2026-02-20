import { Fragment } from "react/jsx-runtime";
import styles from "./Ulist.module.css";

function Ulist({ prop }) {
  return (
    <>
      {prop.map(({ name, location, speaker, type, time }, index) => {
         const times = Array.isArray(time) ? time : time ? [time] : [];
        return (
          <li key={index}>
            <h3>{name}</h3>
            <p>{location}</p>
            <p>{speaker}</p>
            <p>{type}</p>
            {times.map(({start, end}) => {
              return (
                <>
                  <p>{start}</p>
                  <p>{end}</p>
                </>
              );
            })}
          </li>
        );
      })}
    </>
  );
}

export default Ulist;
