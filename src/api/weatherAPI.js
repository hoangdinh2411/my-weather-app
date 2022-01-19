import axios from "axios";
import axiosClient from "./axiosClient";
const weatherAPI = {
  getDataByGeographic: async (params) => {
    const url = "/weather";
    return await axiosClient.get(url, params);
  },

  getCityList : async()=>{
    return await axios.get('https://hoangdinh2411.github.io/cityListAPI/db.json').then(res=>res.data)
  }

};

export default weatherAPI;
