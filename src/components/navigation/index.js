import logo from "assets/logo.png";
import { Link } from "react-router-dom";
import commonConstants from "constants/";
import { FaDoorOpen } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navigation() {
  const [checked, setChecked] = useState(
    JSON.parse(localStorage.getItem("menuStatus"))
  );

  useEffect(() => {
    localStorage.setItem("menuStatus", JSON.stringify(checked));
    return () => {};
  }, [checked]);

  const handleShowOrHideMenu = () => {
    setChecked(!checked);
  };

  return (
    <section className={`nav-wrapper ${checked ? "active" : ""} `}>
      <div className="menubar">
        <Link to="/" className="menubar__logo" title="Home">
          <img title="Home" src={logo} />
        </Link>
        
        <ul>
          {commonConstants.menuItems.map((item, index) => {
            if (item.title === "Show Menu") {
              return (
                <li key={index} title={item.title}>
                  {item.icon}
                </li>
              );
            } else {
              return (
                <li key={index} title={item.title}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
        <label onClick={handleShowOrHideMenu}>
          <FaDoorOpen title="Show / Hide Menu" />
        </label>
      </div>
    </section>
  );
}

export default Navigation;
