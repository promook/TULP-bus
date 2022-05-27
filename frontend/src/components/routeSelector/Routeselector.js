import React, { useState } from "react";
import "./Routeselector.css";
import * as apiCall from "./routeApifunc";
import BusList from "../BusList/BusList";
export default function Routeselector() {
  const [dataInp, setData] = useState("");
  const [startCity, setStartCity] = useState("");
  const [destination, setDestination] = useState("");
  const [schedule, setSchedule] = useState("");
  const [Inout, setInOut] = useState("");
  const handleToCity = (e) => {
    e.preventDefault();
    setDestination({ destination: e.target.value });
    localStorage.setItem("destination", e.target.value);
  };
  const renderBusList = (dataInp) => {
    if (Object.keys(dataInp).length > 0) {
      return <BusList value={dataInp} />;
    }
  };
  const handleFromCity = (e) => {
    e.preventDefault();
    setStartCity({ startCity: e.target.value });
    localStorage.setItem("start", e.target.value);
    // console.log(startCity)
  };
  const BusSchedule = (e) => {
    e.preventDefault();
    setSchedule({ schedule: e.target.value });
    localStorage.setItem("schedule", e.target.value);
    // console.log(startCity)
  };
  const BusInOut = (e) => {
    e.preventDefault();
    setInOut({ Inout: e.target.value });
    localStorage.setItem("Inout", e.target.value);
    // console.log(startCity)
  };

  const getRoutes = (e) => {
    e.preventDefault();
    // console.log(startCity,destination)
    apiCall
      .getRoutesFromApi(startCity.startCity, destination.destination)
      .then((response) => response.data)
      .then((data) => {
        setData(data.bus);
      });
  };

  const handleDate = (e) => {
    e.preventDefault();
    //    console.log(e.target.value)
    localStorage.setItem("date", e.target.value);
  };

  return (
    <div className="rdc">
      <div className="form-group inline"></div>
      <div className="main-container">
        <form className="form-inline" onSubmit={(e) => getRoutes(e)}>
        <select
            name="ad_account_selected"
            data-style="btn-new"
            class="selectpicker"
            onChange={(e) => {
              BusInOut(e);
            }}
          >
            <option>รอบรถขาเข้า-ออก</option>
            <option>รถขาเข้า</option>
            <option>รถขาออก</option>
          </select>
          <select
            name="ad_account_selected"
            data-style="btn-new"
            class="selectpicker"
            onChange={(e) => {
              handleFromCity(e);
            }}
          >
            <option>จาก</option>
            <option>มหาวิทยาลัย ธรรมศาสตร์ ศูนย์ลำปาง</option>
            <option>เซ็นทรัล ลำปาง</option>
            <option>ศาลากลาง</option>
            <option>แม็กโคร</option>
            <option>บิ๊กซี ลำปาง</option>
          </select>
          <select
            name="ad_account_selected"
            data-style="btn-new"
            class="selectpicker"
            onChange={(e) => {
              handleToCity(e);
            }}
          >
            <option>ถึง</option>
            <option>เซ็นทรัล ลำปาง</option>
            <option>ศาลากลาง</option>
            <option>แม็กโคร</option>
            <option>บิ๊กซี ลำปาง</option>
            <option>มหาวิทยาลัย ธรรมศาสตร์ ศูนย์ลำปาง</option>
          </select>
          <select
            name="ad_account_selected"
            data-style="btn-new"
            class="selectpicker"
            onChange={(e) => {
              BusSchedule(e);
            }}
          >
            <option>รอบรถ</option>
            <option>รอบที่ 1</option>
            <option>รอบที่ 2</option>
            <option>รอบที่ 3</option>
            <option>รอบที่ 4</option>
            <option>รอบที่ 5</option>
          </select>
          <input
            onChange={(e) => {
              handleDate(e);
            }}
            type="date"
          ></input>
          {/* <input type="submit" className=" btn btn-primary btn-md getRoute" /> */}
          <a className="btn btn-primary btn-md getRoute" data-toggle="pill" href="#menu1">ส่ง
            </a>
        </form>

        <div>{renderBusList(dataInp)}</div>
        <div className = "bus"><br></br>
        <a>
            <img src="https://cdn.discordapp.com/attachments/951368355405791253/979757022520164373/Group_28_1.png" width="500" />
            &nbsp; &nbsp; &nbsp; <img src="https://cdn.discordapp.com/attachments/951368355405791253/979763927955161119/unknown.png" width="500" />
          </a>
        </div>
      </div>
    </div>
    
  );
}
