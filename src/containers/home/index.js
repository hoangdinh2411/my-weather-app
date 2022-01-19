import { WeatherCard, WindCard } from "components";
import geoLocationContext from "context/weatherContext";
import { useContext, useEffect, useState } from "react";
import weatherAPI from "api/weatherAPI";
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')
  const location = useContext(geoLocationContext);
  const [information, setInformation] = useState({
    weather: {},
    wind: {},
  });

  useEffect(() => {
    if (location) {
      let params
      if(typeof location === 'string' ){
        params={
          q: location
        }
      }else if(typeof location === 'number'){
        params={
          id: location
        }
      }else{
        params = location
      }
      weatherAPI
        .getDataByGeographic({ params })
        .then((data) => {
          setIsLoading(false)
          const main = data.main;
          const weather = data.weather;
          const wind = data.wind;

          setInformation({
            weather: {
              title: "Weather",
              status: weather[0].main,
              temp: Math.ceil(main.temp),
              humidity: main.humidity,
              name: data.name,
              feelLike: Math.ceil(main.feels_like),
              description: weather[0].description.toUpperCase(),
              icon: weather[0].icon,
              clouds: data.clouds.all,
            },
            wind: {
              name: data.name,
              title: "Wind",
              deg: wind.deg,
              speed: wind.speed,
              gust: wind.gust,
            },
          });
        })
        .catch((error) => {
          setError('The country you wrote was not correct. Please try again')
        });
    }
    return () => {};
  }, [location]);

  useEffect(() => {
    const timeout = setTimeout(()=>{
        setError('')
    },2000)

    return ()=>{
      clearTimeout(timeout)
    }
  },[error])

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div className="row">
        <div className="col-1-of-2">
          <WeatherCard info={information.weather} />
        </div>
        <div className="col-1-of-2">
          <WindCard info={information.wind} />
        </div>
      </div>
    </>
  );
}

export default Home;
