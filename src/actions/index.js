import axios from 'axios';

const API_KEY = '32b150c0dcc6a166f10bd9b43fded127'; //public api key of openweathermap
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},pk`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}