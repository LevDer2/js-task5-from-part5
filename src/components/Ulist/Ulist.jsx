import { MdPlace } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { FaRegCalendarTimes, FaRegCalendarPlus} from "react-icons/fa";
import { RiVipDiamondFill } from "react-icons/ri";
import {List, Caption} from "./Ulist.style"
import TimeStart from "../time/TimeStart";
import Time from "../time/Time";

function Ulist({ prop }) {
  return (
    <>
      {prop.map(({ name, location, speaker, type, time }, index) => {
        return (
          <List key={index}>
            <Caption>{name}</Caption>
            <p><MdPlace /> {location}</p>
            <p><FaPerson /> {speaker}</p>
            <p><RiVipDiamondFill /> {type}</p>
                  <p><FaRegCalendarTimes /> {TimeStart(time.start)}</p>
                  <p><FaRegCalendarPlus/> {Time(time.start, time.end)}</p>
          </List>
        );
      })}
    </>
  );
}

export default Ulist;
