import Layout from "layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/')
  },[])
  return (
    <div className="main">
      <div className="body">
        <Layout />
       
      </div>
    </div>
  );
}

export default App;
