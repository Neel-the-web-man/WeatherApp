import React, { useEffect, useState } from 'react'
import "./Section5.css"
import { getFutureData } from '../data/futureapi.js';
const Section5 = (props) => {
  const [Loc, setLoc] = useState("");
  const [Forecast, setForecast] = useState("");
  const getMonth = () => {
    let date = new Date();
    return (date.getMonth() + 1);
  }
  const getData = async () => {
    if(Loc!="--"){
    let data;
    let date = new Date();
    let month = date.getMonth() * 1 + 1;
    let year = date.getFullYear();
    let forecastArr = [];
    let k=0;
    for (let i = 0; i < 10; i++) {
      if (month + 1 > 12) {
        month = month + 1 - 12;
        year = year + 1;
      } else {
        month++;
      }
      let reqdate;
      if (month < 10) {
        reqdate = `${year}-0${month}-15`
        if (i == 9) {
          reqdate = `${year}-0${month}-05`;
        }
      } else {
        reqdate = `${year}-${month}-15`
        if (i == 9) {
          reqdate = `${year}-${month}-05`;
        }
      }
      if (Loc != "" && Loc != "--" && i%3==0) {
        if (Loc == "Nashik") {
          data = await getFutureData("Nasik", reqdate);
        } else {
          data = await getFutureData(Loc, reqdate);
        }
        data = data.forecast;
        forecastArr[k++] = data.forecastday[0];
      }
    }
    setForecast(forecastArr);
  }
  else{
    setForecast("");
  }
}
  const setMonth = (n) => {
    if (n > 12) {
      n = n - 12;
    }
    if (n == 1 || n == 2 || n == 3) {
      return `January - March`
    } else if (n == 4 || n == 5 || n == 6) {
      return `April - June`
    } else if (n == 7 || n == 8 || n == 9) {
      return `July - Sepetember`
    } else if (n == 10 || n == 11 || n == 12) {
      return `October - December`
    }
  }
  const handleCard = (index) => {
    if (Forecast!="" && Forecast!=undefined) {
      let data=Forecast[index].day;
      let cond=data.condition;
      return (
        <>
          <div className="season">{setMonth(getMonth()+index*3)}</div>
          <div className="m-wCondition">Chances of rainfall: {cond.text}</div>
          <div className="m-wCondition">UV-index: {data.uv}</div>
          <div className="m-wCondition">Max-Temperature: {data.maxtemp_c}°C</div>
          <div className="m-wCondition">Min-Temperature: {data.mintemp_c}°C</div>
          <div className="m-wCondition">Avg-Humidity: {data.avghumidity}%</div>
        </>
      )
    }else if(Loc=='--' || Forecast==""){
      return (
        <>
          <div className="season">{setMonth(getMonth()+index*3)}</div>
          <div className="m-wCondition">Chances of rainfall: --</div>
          <div className="m-wCondition">UV-index: --</div>
          <div className="m-wCondition">Max-Temperature: --°C</div>
          <div className="m-wCondition">Min-Temperature: --°C</div>
          <div className="m-wCondition">Avg-Humidity: --%</div>
        </>
      )
    }
  }
  useEffect(() => {
    getMonth();
  }, []);
  useEffect(() => {
    if (props.passLocData != "") {
      setLoc(props.passLocData);
    }
  }, [props.passLocData]);
  useEffect(() => {
    getData();
  }, [Loc]);
  return (
    <section id="section5">
      <h1>Monthly Forecast {Loc}</h1>
      <div className="cards-sec5">
        <div className="mn-card">
          {handleCard(0)}
        </div>
        <div className="mn-card">
          {handleCard(1)}
        </div>
        <div className="mn-card">
          {handleCard(2)}
        </div>
        <div className="mn-card">
          {handleCard(3)}
        </div>
      </div>
    </section>
  )
}

export default Section5
