import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from "dayjs";
dayjs.extend(advancedFormat);

export const formatDate = (date: string, format: string = "MMMM Do, YYYY") =>
  dayjs(date).format(format);
