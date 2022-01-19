import React from "react";
import Dashboard from "./dashboard";
import Header from "./header";
function Layout() {
  return (
    <>
      <Header />
      <div className="dashboard-wrapper">
        <Dashboard />
      </div>
    </>
  );
}

export default Layout;
