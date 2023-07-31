import React, { useEffect, useState } from "react";
import "./hero.scss";

const Hero = () => {
  const targetDate = "2023-08-02T18:30:00";

  const [remainingTime, setRemainingTime] = useState(
    getRemainingTime(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = getRemainingTime(targetDate);
      setRemainingTime(timeLeft);

      if (timeLeft.total <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="hero">
      <div className="wrapper">
        {/* <div className="info">
          <div className="txt-g">საფეხბურთო კლუბი გაგრა</div>
          <div className="btn">Read More</div>
        </div> */}
        <div className="fixture">
          <div className="f-wrap">
            <div className="stadium">ილია კოკაიას სტადიონი</div>

            <div className="date">25 აპრილი</div>

            <div className="teams-wrap">
              <div className="left">
                <img src="/images/assets/gagra-l.png" alt="" className="logo" />
                <div className="team-name">FC GAGRA</div>
              </div>
              <div className="mid">
                {formatTime(remainingTime.days)} :{" "}
                {formatTime(remainingTime.hours)} :{" "}
                {formatTime(remainingTime.minutes)} :{" "}
                {formatTime(remainingTime.seconds)}
              </div>
              <div className="right">
                <div className="team-name">FC GAGRA</div>
                <img src="/images/assets/gagra-l.png" alt="" className="logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="break"></div>
      </div>
    </div>
  );
};

const getRemainingTime = (targetDate) => {
  const now = new Date().getTime();
  const targetTime = new Date(targetDate).getTime();
  const total = targetTime - now;

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

export default Hero;
