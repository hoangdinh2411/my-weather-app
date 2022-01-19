
import {
    FaHome,
    FaRegCalendarAlt,
  } from "react-icons/fa";
  import { FiSettings } from "react-icons/fi";
const commonConstants = {
    menuItems: [
    {
      title: "Home",
      icon: <FaHome />,
      path:"/"
    },
    
    {
      title: "Calendar",
      icon: <FaRegCalendarAlt />,
      path:"/calender"
  
    },
    {
      title: "Setting",
      icon: <FiSettings />,
      path:"/setting"
  
    },
    
  ],

 

}
export default commonConstants