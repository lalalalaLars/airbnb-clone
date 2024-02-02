import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchBarcontainer">
      <div className="searchBar">
        <div className="inputWrapper">
          <h4>Hvor?</h4>
          <input type="text" placeholder="Søg destination" />
        </div>
        <div className="inputWrapper">
          <h4>Indtjekning</h4>
          <input type="text" placeholder="Tilføj datoer" />
        </div>
        <div className="inputWrapper">
          <h4>Udtjekning</h4>
          <input type="text" placeholder="Tilføj datoer" />
        </div>
        <div className="inputWrapperGuest">
          <div className="guestContent">
            <h4>Hvem?</h4>
            <input type="text" placeholder="Tilføj gæster" />
          </div>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
