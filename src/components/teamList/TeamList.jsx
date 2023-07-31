import "./teamList.scss";
import React, { useState } from "react";

const TeamList = ({ titles }) => {
  const data = [
    {
      name: "ოლეკსანდრ ვორობეი",
      number: "18",
      img: "/mainTeam/ოლეკსანდრ ვორობეი.png",
      position: "მეკარე",
      age: "28",
      height: "189",
      weight: "75",
    },
    {
      name: "გიორგი ბედიაშვილი",
      number: "12",
      img: "/mainTeam/გიორგი ბედიაშვილი.png",
      position: "მეკარე",
      age: "17",
      height: "",
      weight: "",
    },
    {
      name: "ნიკა ქავთარაძე",
      number: "31",
      img: "/mainTeam/ნიკა ქავთარაძე.png",
      position: "მეკარე",
      age: "24",
      height: "189",
      weight: "78",
    },
    {
      name: "კობა იაძე",
      number: "3",
      img: "/mainTeam/კობა იაძე.png",
      position: "მცველი",
      age: "20",
      height: "",
      weight: "",
    },
    {
      name: "თორნიკე ჯანგიძე",
      number: "4",
      img: "/mainTeam/თორნიკე ჯანგიძე.png",
      position: "მცველი",
      age: "22",
      height: "",
      weight: "",
    },
    {
      name: "ლუკა ნოზაძე",
      number: "5",
      img: "/mainTeam/ლუკა ნოზაძე.png",
      position: "მცველი",
      age: "26",
      height: "183",
      weight: "69",
    },
    {
      name: "ლევან კაკუბავა",
      number: "21",
      img: "/mainTeam/ლევან კაკუბავა.png",
      position: "მცველი",
      age: "32",
      height: "184",
      weight: "85",
    },
    {
      name: "ვასილ ხოსიტაშვილი",
      number: "22",
      img: "/mainTeam/ვასილ ხოსიტაშვილი.png",
      position: "მცველი",
      age: "27",
      height: "177",
      weight: "66",
    },
    {
      name: "ანდრო ნემსაძე",
      number: "23",
      img: "/mainTeam/ანდრო ნემსაძე.png",
      position: "მცველი",
      age: "25",
      height: "183",
      weight: "78",
    },
    {
      name: "კახაბერ კაკაშვილი",
      number: "6",
      img: "/mainTeam/კახაბერ კაკაშვილი.png",
      position: "ნახევარმცველი",
      age: "29",
      height: "183",
      weight: "79",
    },
    {
      name: "თეიმურაზ შონია",
      number: "7",
      img: "/mainTeam/თეიმურაზ შონია.png",
      position: "ნახევარმცველი",
      age: "33",
      height: "187",
      weight: "81",
    },
    {
      name: "ერეკლე სულთანიშვილი",
      number: "8",
      img: "/mainTeam/ერეკლე სულთანიშვილი.png",
      position: "ნახევარმცველი",
      age: "28",
      height: "180",
      weight: "70",
    },
    {
      name: "როინ ოდიშელიძე",
      number: "22",
      img: "/mainTeam/როინ ოდიშელიძე.png",
      position: "ნახევარმცველი",
      age: "",
      height: "",
      weight: "",
    },
    {
      name: "სანდრო შეწირული",
      number: "24",
      img: "/mainTeam/სანდრო შეწირული.png",
      position: "ნახევარმცველი",
      age: "24",
      height: "180",
      weight: "75",
    },
    {
      name: "ლაშა ჩიხრაძე",
      number: "18",
      img: "/mainTeam/ლაშა ჩიხრაძე.png",
      position: "ნახევარმცველი",
      age: "20",
      height: "",
      weight: "",
    },
    {
      name: "ლუკა ჩაგანავა",
      number: "20",
      img: "/mainTeam/ლუკა ჩაგანავა.png",
      position: "ნახევარმცველი",
      age: "18",
      height: "178",
      weight: "67",
    },
    {
      name: "ბექა შუბითიძე",
      number: "27",
      img: "/mainTeam/ბექა შუბითიძე.png",
      position: "ნახევარმცველი",
      age: "29",
      height: "",
      weight: "",
    },
    {
      name: "მათეუს მარკონდელე",
      number: "29",
      img: "/mainTeam/მათეუს მარკონდელე.png",
      position: "ნახევარმცველი",
      age: "27",
      height: "172",
      weight: "",
    },
    {
      name: "იაროსლავ რიაზანცევი",
      number: "30",
      img: "/mainTeam/იაროსლავ რიაზანცევი.png",
      position: "ნახევარმცველი",
      age: "18",
      height: "",
      weight: "",
    },
    {
      name: "თორნიკე ოქრიაშვილი",
      number: "10",
      img: "/mainTeam/.png",
      position: "თავდამსხმელი",
      age: "31",
      height: "183",
      weight: "",
    },
    {
      name: "ზურაბ მუსელიანი",
      number: "11",
      img: "/mainTeam/ზურაბ მუსელიანი.png",
      position: "ზურაბ მუსელიანი",
      age: "23",
      height: "",
      weight: "",
    },
    {
      name: "გიორგი ლომთაძე",
      number: "17",
      img: "/mainTeam/გიორგი ლომთაძე.png",
      position: "თავდამსხმელი",
      age: "21",
      height: "",
      weight: "",
    },
  ];

  const cups = [
    {
      name: "საქართველოს პირველი ლიგა",
      year: "2007-2008",
    },
    {
      name: "საქართველოს პირველი ლიგა",
      year: "2010-2011",
    },
    {
      name: "ზამთრის თასი",
      year: "2017",
    },
    {
      name: "საქართველოს თასი",
      year: "2010-11",
    },
    {
      name: "საქართველოს თასი",
      year: "2020",
    },
  ];

  const [activePlayer, setActivePlayer] = useState(data[0]);

  return (
    <div className={titles ? "team-list lg" : "team-list"}>
      <div className="wrapper">
        <div className="team-nav">
          <div className="team-nav-item active">FC Gagra Players</div>
        </div>

        <div className="player-data">
          <img src={activePlayer.img} alt="" className="pli" />
          <div className="player-basic-info">
            <div className="name">{activePlayer.name}</div>

            <div className="position">{activePlayer.position}</div>

            <div className="pgi">
              <div className="by">
                ასაკი: <span>{activePlayer.age} წელი</span>
              </div>
              <div className="pp">
                პოზიცია: <span>{activePlayer.position}</span>
              </div>
              <div className="wh">
                სიმაღლე: <span>{activePlayer.height} სმ</span>
              </div>
              <div className="wh">
                სიმაღლე: <span>{activePlayer.weight} კგ</span>
              </div>
            </div>

            <div className="pn">{activePlayer.number}</div>
          </div>
        </div>

        <div className="change-player">
          <img src="/images/icons/up.png" alt="" className="up" />
          <div className="players">
            {data.map((dt) => (
              <div
                className="psi"
                key={dt.number}
                onClick={() => setActivePlayer(dt)}
              >
                <div className="psin">{dt.number}</div>
                <div className="psipw">
                  <div className="psipn">{dt.name.split(" ")[1]}</div>
                  <div className="psip">{dt.position}</div>
                </div>
              </div>
            ))}
          </div>
          <img src="/images/icons/down.png" alt="" className="down" />
        </div>

        {titles && (
          <div className="cups">
            <div className="title">ტიტულები</div>
            <div className="cups-box">
              <img src="/images/icons/prev.png" alt="" className="prev" />
              <div className="cups-box-wrap">
                {cups.map((cup) => (
                  <div className="won-cup">
                    <img
                      src="/images/assets/cup.png"
                      alt=""
                      className="cup-icon"
                    />
                    <div className="cup-details">
                      <div className="cup-name">{cup.name}</div>
                      <div className="cup-year">{cup.year}</div>
                    </div>
                  </div>
                ))}
              </div>
              <img src="/images/icons/nx.png" alt="" className="next" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamList;
