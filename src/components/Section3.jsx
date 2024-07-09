import React, { useEffect, useState } from 'react'
import "./Section3.css"
import { getForecastData } from '../data/forecast.js';
const Section3 = (props) => {
    const [Date, setDate] = useState("");
    const [Location, setLocation] = useState("");
    const [CurrTime, setCurrTime] = useState("");
    const [forecast, setforecast] = useState("");
    const getData = async () => {
        if (Location != "Nashik" && Location != "--") {
            let data = await getForecastData(Location, 1);
            let forecast = data.forecast;
            let forecastDay = forecast.forecastday[0];
            setforecast(forecastDay.hour);
            setDate(forecastDay.date);
            let cur = data.current;
            let arr = cur.last_updated;
            let index1, index2;
            let time = "";
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == " ") {
                    index1 = i;
                }
                if (arr[i] == ":") {
                    index2 = i;
                    break;
                }
            }
            for (let i = index1 + 1; i < index2; i++) {
                time = time + arr[i];
            }
            setCurrTime(time);
        }
    }
    const handleCard = (t) => {
        if (Location != "--") {
            let time;
            if (t < 10) {
                time = `0${t}:00`;
            } else {
                time = `${t}:00`;
            }
            let timeArr = `${Date} ${time}`;
            let hrArr;
            for (let i = 0; i < (forecast.length); i++) {
                if (forecast[i].time == timeArr) {
                    hrArr = forecast[i];
                    break;
                }
            }
            if (hrArr != undefined) {

                let cond = hrArr.condition;
                return (<>
                    <h1>Weather from {t}:00 to {t * 1 + 3}:00</h1>
                    <div className="weather-data">Weather Condition: {cond.text}</div>
                    <div className="weather-data">Temperature: {hrArr.temp_c}°C</div>
                    <div className="weather-data">Humidity: {hrArr.humidity}%</div>
                    <div className="weather-data">Winds: {hrArr.wind_kph} kph</div>
                </>
                )
            }
        }else{
            return (<>
                <h1>Weather from {t}:00 to {t * 1 + 3}:00</h1>
                <div className="weather-data">Weather Condition: --</div>
                <div className="weather-data">Temperature: --°C</div>
                <div className="weather-data">Humidity: --%</div>
                <div className="weather-data">Winds: -- kph</div>
            </>
            )
        }
    }
    useEffect(() => {
        setLocation(props.passLocData);
    }, [props.passLocData])
    useEffect(() => {
        if (Location != "" && Location != " ") {
            if (Location == "Nashik") {
                setLocation("Nasik");
            }
            getData();
        }
    }, [Location])
    return (
        <>
            <section id="section3">
                <h1>Hourly Forecast For {Location}</h1>
                <h2>Date: {Date}</h2>
                <div className="sec3-cont">
                    <div className="card">
                        {handleCard(0)}
                    </div>
                    <div className="card">
                        {handleCard(3)}
                    </div>
                    <div className="card">
                        {handleCard(6)}
                    </div>
                    <div className="card">
                        {handleCard(9)}
                    </div>
                    <div className="card">
                        {handleCard(12)}
                    </div>
                    <div className="card">
                        {handleCard(15)}
                    </div>
                    <div className="card">
                        {handleCard(18)}
                    </div>
                    <div className="card">
                        {handleCard(21)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section3
