import "./stats.scss";
import React from "react";

const Stats = () => {
  const standings = [
    {
      st: "1",
      name: "დინამო ბათუმი",
      logo: "/images/assets/gagra-l.png",
      m: "19",
      w: "12",
      l: "1",
      p: "42",
    },
    {
      st: "2",
      name: "საბურთალო თბილისი",
      logo: "/images/assets/gagra-l.png",
      m: "19",
      w: "11",
      l: "3",
      p: "38",
    },
    {
      st: "3",
      name: "სამგურალი",
      logo: "/images/assets/gagra-l.png",
      m: "19",
      w: "10",
      l: "5",
      p: "37",
    },
    {
      st: "4",
      name: "დინამო თბილისი",
      logo: "/images/assets/gagra-l.png",
      m: "19",
      w: "10",
      l: "5",
      p: "34",
    },
    {
      st: "5",
      name: "დილა გორი",
      logo: "/images/assets/gagra-l.png",
      m: "19",
      w: "9",
      l: "3",
      p: "34",
    },
    {
      st: "6",
      name: "დილა გორი",
      logo: "/images/assets/gagra-l.png",
      m: "19",
      w: "6",
      l: "7",
      p: "24",
    },
    {
      st: "7",
      name: "გაგრა",
      logo: "/images/assets/gagra-l.png",
      m: "19",
      w: "4",
      l: "10",
      p: "17",
    },
    {
      st: "8",
      name: "შუქურა",
      logo: "/images/assets/gagra-l.png",
      m: "19",
      w: "3",
      l: "12",
      p: "13",
    },
    {
      st: "9",
      name: "სამტრედია",
      logo: "/images/assets/gagra-l.png",
      m: "19",
      w: "3",
      l: "14",
      p: "11",
    },
    {
      st: "10",
      name: "თელავი",
      logo: "/images/assets/gagra-l.png",
      m: "19",
      w: "2",
      l: "12",
      p: "11",
    },
  ];
  return (
    <div className="stats">
      <div className="wrapper">
        <div className="left">
          <div className="next">
            <div className="title">შემდეგი მატჩი</div>
            <div className="stat-box">
              <div className="date">
                <div className="top">22 ივლისი, 2023</div>
                <div className="bottom">საქართველოს თასი</div>
              </div>
              <div className="home">
                <img
                  src="/images/assets/gagra-logo.png"
                  alt=""
                  className="logo"
                />
                <div className="team">სამგურალი</div>
              </div>

              <div className="away">
                <img
                  src="/images/assets/gagra-logo.png"
                  alt=""
                  className="logo"
                />
                <div className="team">გაგრა</div>
              </div>

              <img
                src="/images/icons/next.png"
                alt="sdsd"
                className="next-icon"
              />

              <div className="break">
                <span>წყალტუბო / 26 მაისის სახელობის სტადიონი</span>
              </div>
            </div>
          </div>
          <div className="prevs">
            <div className="title">წინა მატჩები</div>
            <div className="box-wrap">
              <div className="stat-box">
                <div className="date">
                  <div className="top">6 ივნისი, 2023</div>
                  <div className="bottom">კრისტალბეთ ეროვნული ლიგა</div>
                </div>
                <div className="home">
                  <img
                    src="/images/assets/gagra-logo.png"
                    alt=""
                    className="logo"
                  />
                  <div className="team">თელავი</div>
                </div>

                <div className="away">
                  <img
                    src="/images/assets/gagra-logo.png"
                    alt=""
                    className="logo"
                  />
                  <div className="team">გაგრა</div>
                </div>

                <div className="score">0:1</div>

                <div className="break">
                  <span>თელავი / კავკასიონი არენა</span>
                </div>
              </div>

              <div className="stat-box">
                <div className="date">
                  <div className="top">1 ივნისი, 2023</div>
                  <div className="bottom">კრისტალბეთ ეროვნული ლიგა</div>
                </div>
                <div className="home">
                  <img
                    src="/images/assets/gagra-logo.png"
                    alt=""
                    className="logo"
                  />
                  <div className="team">შუქურა</div>
                </div>

                <div className="away">
                  <img
                    src="/images/assets/gagra-logo.png"
                    alt=""
                    className="logo"
                  />
                  <div className="team">გაგრა</div>
                </div>

                <div className="score">3:4</div>

                <div className="break">
                  <span>ქობულეთი / ჩელე არენა</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="title">ტურნირის ცხრილი</div>
          <div className="table">
            <div className="teams">
              {standings.map((standing) => (
                <div className="team" key={standing.st}>
                  <div className="standing">{standing.st}</div>

                  <div className="logo-wrap">
                    <div className="name">{standing.name}</div>
                  </div>

                  <div className="m">{standing.m}</div>
                  <div className="w">{standing.w}</div>
                  <div className="l">{standing.l}</div>
                  <div className="p">{standing.p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
