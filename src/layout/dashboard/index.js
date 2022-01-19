import { AppBar } from "components/";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import geoLocationContext from "context/weatherContext";
function Dashboard() {
  const [currentGeolocation, setCurrentGeolocation] = useState(JSON.parse(localStorage.getItem("geolocation") || null));
  //get current geolocation
  useEffect(() => {
    if (!currentGeolocation) {
      const geoConfirmText = "This app needs access to your location";
      if (window.confirm(geoConfirmText) === true) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              console.log(position)
              const location = {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              };
              setCurrentGeolocation(location);
              localStorage.setItem("geolocation", JSON.stringify(location));
            },
            (error) => {
              this.setState(null);
            }
          );
        } else {
          console.log("not support");
        }
      }
    }

    // const data = await weatherAPI.getDataByGeographic()
    return () => {
    };
  }, [currentGeolocation]);




  const handleSearch =(value)=>{
    console.log(value)
    let newValue = value
    if(typeof value !== 'number'){
      newValue= value.split(' ').join('')
    }
    setCurrentGeolocation(newValue)
  }

  
  return (
    <>
      <AppBar handleSearch={handleSearch}/>
      <div className="outlet-wrapper">
        <geoLocationContext.Provider value={currentGeolocation}>
         
          <Outlet />
        </geoLocationContext.Provider>
      </div>
    </>
  );
}

export default Dashboard;
