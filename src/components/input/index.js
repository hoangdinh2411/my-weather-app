import React from "react";

function Input({ icon,onHandleChange,onHandleKeyDown, ...props }) {
  return (
    
    <div className="input-boxes">
      <input 
      className={`input-boxes__${props.variant} `} {...props} 
      onChange={e=>onHandleChange(e)}
      onKeyDown={(e)=>onHandleKeyDown(e)} >
      </input>
      <i>
      {icon}
      </i>
    </div>
  );
}

export default Input;
