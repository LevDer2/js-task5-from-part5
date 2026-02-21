import { MdPlace } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { FaRegCalendarTimes, FaRegCalendarPlus} from "react-icons/fa";
import { RiVipDiamondFill } from "react-icons/ri";
import styles from "./Ulist.module.css";

function Ulist({ prop }) {
  return (
    <>
      {prop.map(({ name, location, speaker, type, time }, index) => {
         const times = Array.isArray(time) ? time : time ? [time] : [];
        return (
          <li key={index}>
            <h3>{name}</h3>
            <p><MdPlace /> {location}</p>
            <p><FaPerson /> {speaker}</p>
            <p><RiVipDiamondFill /> {type}</p>
            {times.map(({start, end}) => {
              return (
                <>
                  <p><FaRegCalendarTimes /> {start}</p>
                  <p><FaRegCalendarPlus/> {end}</p>
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
