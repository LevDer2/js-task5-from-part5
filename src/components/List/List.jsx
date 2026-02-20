import { Children } from "react";
import styles from "./List.module.css";

function List({children}) {
   return <ul>
        {children}
    </ul>
}

export default List