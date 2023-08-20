const dDay_ksat = new Date("2023-11-16 00:00:00");
const clock = document.getElementById("clock");
const dClock = document.getElementById("d-day");

const getCurrentClock = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.innerText = `${hours.toString()} : ${minutes
    .toString()
    .padStart(2, "0")}`;

  setTimeout(getCurrentClock, 1000);
};

const getDdayClock = () => {
  const currentDate = new Date();
  const timeStamp = dDay_ksat - currentDate;
  const dDay = Math.floor(timeStamp / (1000 * 60 * 60 * 24));
  dClock.innerText = `수능시험일 D-${dDay}`;
  setTimeout(getDdayClock, 60000);
};
const handleDday = () => {
  dClock.classList.add("hidden");
};
dClock.addEventListener("click", handleDday);
getDdayClock();
getCurrentClock();
