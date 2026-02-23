import { format, formatDistance, formatDistanceStrict } from "date-fns";

function Time(start, end) {
    return formatDistanceStrict(Date.parse(start), Date.parse(end))
}

export default Time;