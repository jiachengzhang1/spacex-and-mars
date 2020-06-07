export default function getDate(time, type) {
  switch (type) {
    case "date":
      return new Date(time).toDateString();
    case "month":
      return new Date(time);
    case "today":
      return new Date().toString();
    default:
      return Date(time).toString();
  }
}
