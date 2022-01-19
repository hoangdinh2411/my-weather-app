import { Routes, Route } from "react-router-dom";

import App from "App";
import CalenderComponent from "containers/calender";
import Home from "containers/home";
import SettingPage from "containers/setting";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home/>} />
        <Route path="calender" element={<CalenderComponent />} />
        <Route path="setting" element={<SettingPage />} />
        <Route path="*" element={<h1>There is nothing here</h1>} />
      </Route>
    </Routes>
  );
}

export default Routing;
