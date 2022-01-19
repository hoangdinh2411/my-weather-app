import { Input } from "components";
import { useState,useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import weatherAPI from "api/weatherAPI";
//the App bar displays information och actions relating to the current user
function Searchbar({ handleSearch }) {
  const [searchText, setSearchText] = useState("");
  const [cityList , setCityList]  =useState([]);
  const [filterSearch , setFilterSearch]  =useState([]);

  
  useEffect(()=>{
  
    weatherAPI.getCityList()
    .then(data=>{
      setCityList(data)
    })
    return ()=>{
    }
  },[])
  useEffect(()=>{
    if(searchText.length >2){
      setFilterSearch(cityList.filter(city=>{
        if(city.name.toLowerCase().includes(searchText.toLowerCase())){
          return city
        }
  
        return undefined;
      }))
    }

   
  },[searchText])
 
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
  const handleSelectCityName = (id) => {
    handleSearch(Number(id));
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
            filterSearch.map(city=><li key={city.id} onClick={()=>handleSelectCityName(city.id)} >{city.name}</li>)
            }
        </ul>
      </div>
    </div>
  );
}

export default Searchbar;
