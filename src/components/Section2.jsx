import React, { useEffect ,useState} from 'react'
import "./Section2.css"
import { getWeatherData } from '../data/weatherapi';
const Section2 = (props) => {
    const [ipAdd, setipAdd] = useState("");
    const [LocTime, setLocTime] = useState("--");
    const [LocDate,setLocDate]=useState("--");
    const [Location, setLocation] = useState("--");
    const [valInput, setvalInput] = useState("");
    const [weatherCondition, setweatherCondition] = useState("--");
    const [temperature, settemperature] = useState("--");
    const [humidity, sethumidity] = useState("--");
    const [WindSpeed, setWindSpeed] = useState("--");
    const [errmsg, seterrmsg] = useState("");
    const [Country, setCountry] = useState("--");
    const [imgSrc, setimgSrc] = useState("");
    const getCurrentLocation = async ()=>{
        try{
            let response= await fetch('https://api.ipify.org/');
            let data= await response.text();
            setipAdd(data);
            response=await fetch(`https://ipinfo.io/${data}/geo`);
            data=await response.json();
            setLocation(data.city);
        }catch(err){
            console.log("Failed to fetch ip address");
        }
        
    }
    const getDateNTime=(arr)=>{
        let index;
        for(let i=0;i<arr.length;i++){
            if(arr[i]==" "){
                index=i;
                break;
            }
        }
        let locDate="";
        for(let i=0;i<index;i++){
            locDate=locDate+arr[i];
        }
        setLocDate(locDate);
        let loctime="";
        for(let i=index+1;i<arr.length;i++){
            loctime=loctime+arr[i];
        }
        setLocTime(loctime);
    }
    const handleInput=(e)=>{
        setvalInput(e.target.value);
    }
    const handleSearch=()=>{
        if(valInput!=""&& valInput!=" "){
            setLocation(valInput);
            getData();
        }
        setvalInput("");
    }
    const getData=async ()=>{
        try{
            let data;
            if(Location=="Nashik"){
                data=await getWeatherData(`Nasik`);
            }else{
                data=await getWeatherData(Location);
            }
            let loc=data.location;
            let cur=data.current;
            let cond=cur.condition;
            getDateNTime(loc.localtime);
            setweatherCondition(cond.text);
            settemperature(`${cur.temp_c}°C`);
            sethumidity(`${cur.humidity} %`);
            setWindSpeed(`${cur.wind_kph} Kph`);
            setCountry(loc.country);
            seterrmsg("");
            setimgSrc(cond.icon);
        }catch(err){
            setimgSrc("");
            setCountry("--");
            setweatherCondition("--");
            settemperature("--");
            sethumidity("--");
            setLocDate("--");
            setLocTime("--");
            setLocation("--");
            setWindSpeed("--")
            seterrmsg(err.message);
        }
    }
    const handleErr=()=>{
        seterrmsg("");
    }
    useEffect(()=>{
        getCurrentLocation();
    },[]);
    useEffect(()=>{
        if(Location!='' && Location!=" "){
            getData();
            props.passLoc(Location);
        }
    },[Location])
    
  return (
    <>
    <section id='section2'>
        <div className='loc-input'>
            <input type="text" onChange={handleInput} value={valInput} placeholder='Enter Location' />
            <button onClick={handleSearch}>Search</button>
        </div>
        {errmsg==""?``: (
            <div className="errMsg">{errmsg}!!!
            <button onClick={handleErr}>X</button></div>
        )}
        <h1>Live Weather Data</h1>
        <div className="curr-loc-data">
            <h1 className='h1-sec2'>
            <svg id='sec-2-loc' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" color="#ffffff" fill="none">
            <path d="M18 18C19.2447 18.4244 20 18.9819 20 19.5925C20 20.9221 16.4183 22 12 22C7.58172 22 4 20.9221 4 19.5925C4 18.9819 4.75527 18.4244 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15 9.5C15 11.1569 13.6569 12.5 12 12.5C10.3431 12.5 9 11.1569 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 2C16.0588 2 19.5 5.42803 19.5 9.5869C19.5 13.812 16.0028 16.777 12.7725 18.7932C12.5371 18.9287 12.2709 19 12 19C11.7291 19 11.4629 18.9287 11.2275 18.7932C8.00325 16.7573 4.5 13.8266 4.5 9.5869C4.5 5.42803 7.9412 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
                Location: {Location}|{Country}</h1>
            <h1 className='h1-sec2'>Date: {LocDate}, Time: {LocTime}</h1>
            <img id="weather-img" src={imgSrc} alt="img" />
            <h1 className='weatherCond-sec2'>
                <div>
                Weather Condition: {weatherCondition}
                </div>
            </h1>
            <h1>Temperature: {temperature}</h1>
            <h1>Humidity: {humidity}</h1>
            <h1>Wind Speed: {WindSpeed}</h1>
        </div>
    </section>
    </>
  )
}

export default Section2
