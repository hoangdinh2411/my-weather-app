import axiosClient from "./axiosClient";
const weatherAPI = {
  getDataByGeographic: async (params) => {
    const url = "/weather";
    return await axiosClient.get(url, params);
  },

};

export default weatherAPI;
