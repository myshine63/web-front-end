// setDate(0);可以获得上个月最后一天
function getDay(dateStr) {
  let count = 0;
  let date = new Date(dateStr);
  let month = date.getMonth() + 1;
  for (let i = 0; i < month; i++) {
    count += date.getDate();
    date.setDate(0);
  }
  return count;
}