import axios from "axios";

const baseUrl = 'https://youtube138.p.rapidapi.com'

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key':'658506b314mshb44ac48a82167e5p1084b0jsn5d2a72d0b8d3',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataFromApi = async (url) =>{
    const data = await axios.get(`${baseUrl}/${url}`,options)
    return data
}

