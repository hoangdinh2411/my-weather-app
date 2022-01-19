import React from "react";
import Action from "./action";
import Searchbar from "./searchbar";

function AppBar({handleSearch}) {
  return (
    <div className="appbar">
        <Searchbar handleSearch={handleSearch}/>
    </div>
  );
}

export default AppBar;
