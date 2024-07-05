import axios from 'axios';
const baseUrl='http://api.weatherapi.com/v1/';
const apiKey='6a61220236c945a3904113233240407';
export const getForecastData=async (cityname,days)=>{
    try{
        const {data}=await axios.get(baseUrl+`forecast.json?`+`key=${apiKey}&q=${cityname}&aqi=no&days=${days}`)
        return data;
    }catch(error){
        throw error;
    }
}