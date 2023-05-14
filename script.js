const p = document.getElementById("timer");

function getTime() {
  const date = new Date();
  let dayString = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()},`;
  let hr = date.getHours();
  let timeString = ``;
  if (hr == 12)
    timeString = `${hr}:${date.getMinutes()}:${date.getSeconds()} PM`;
  else if (hr > 12)
    timeString = `${hr - 12}:${date.getMinutes()}:${date.getSeconds()} PM`;
  else timeString = `${hr}:${date.getMinutes()}:${date.getSeconds()} AM`;
  return dayString + " " + timeString;
}

setInterval(() => {
  p.innerText = getTime();
}, 1000);
