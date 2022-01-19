import axios from 'axios'
import queryString from 'query-string'
const axiosClient =axios.create({
    baseURL : process.env.REACT_APP_WEATHER_API_URL,
    timeout:1000,
    headers:{
        'content-type':'application/json'
    },
    paramsSerializer : params=> queryString.stringify({...params,units:'metric', appid: process.env.REACT_APP_API_KEY})

})
// Thêm một bộ đón chặn request
axiosClient.interceptors.request.use(async config=>{
    //handle token
    return config
},error=>{
    return Promise.reject(error)
});



// Thêm một bộ đón chặn response

axiosClient.interceptors.response.use(res=>{
    if(res && res.data){
        return res.data
    }

    return res
},error=>{
    throw Promise.reject(error)
})


export default axiosClient