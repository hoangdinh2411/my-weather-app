import { Input } from "components";
import { useState,useEffect } from "react";
import { FaSearch } from "react-icons/fa";
// import cityList from 'api/cityListDB/db.json'
//the App bar displays information och actions relating to the current user
function Searchbar({ handleSearch }) {
  const [searchText, setSearchText] = useState("");
  const [citiyList , setCityList]  =useState([]);

  useEffect(()=>{
    
    // if(searchText.length>2){
    //   setCityList(cityList.filter(city=>{
    //     if(city.name.includes(searchText)){
    //       return city
    //     }
  
    //     return undefined;
    //   }))
    // }

    // return ()=>{
    //   setCityList([])
    // }
    
   
  },[])
 
  const onHandleChange = (e) => {
    setSearchText(e.target.value);
  };

  const onHandleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchText.trim());
      setSearchText("");
    }
  };
  const onHandleClick = () => {
    handleSearch(searchText.trim());
    setSearchText("");
  };
  return (
    <div >
      <div className={`searchbar ${searchText !== '' ? 'active' : ''}`}>
        <Input
          value={searchText}
          variant="search"
          placeholder="Search..."
          type="search"
          icon={<FaSearch onClick={onHandleClick} />}
          onHandleChange={onHandleChange}
          onHandleKeyDown={onHandleKeyDown}
        />

        <ul className="searchbar__list-cities">
          {
            citiyList.map(city=><li key={city.id}>{city.name}</li>)
            }
        </ul>
      </div>
    </div>
  );
}

export default Searchbar;
