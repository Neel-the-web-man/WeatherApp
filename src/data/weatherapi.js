import axios from 'axios';
const baseUrl='http://api.weatherapi.com/v1/';
const apiKey='6a61220236c945a3904113233240407';
export const getWeatherData=async (cityname)=>{
    try{
        const {data}=await axios.get(baseUrl+`current.json?`+`key=${apiKey}&q=${cityname}&aqi=no`)
        return data;
    }catch(error){
        throw error;
    }
}