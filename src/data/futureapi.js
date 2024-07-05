import axios from 'axios';
const baseUrl='http://api.weatherapi.com/v1/';
const apiKey='6a61220236c945a3904113233240407';
export const getFutureData=async (cityname,date)=>{
    try{
        const {data}=await axios.get(baseUrl+`future.json?`+`key=${apiKey}&q=${cityname}&aqi=no&dt=${date}`)
        return data;
    }catch(error){
        throw error;
    }
}