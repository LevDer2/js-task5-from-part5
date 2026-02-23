import { format } from "date-fns";

function TimeStart(start) {
    return format(Date.parse(start), 'dd MMMM yyyy, hh:mm')
}

export default TimeStart