import "./FilterTabs.scss";
import { filterTabs } from "../../constants/constants";

// eslint-disable-next-line react/prop-types
const FilterTabs = ({ onFilterChange }) => {
  const handleClick = (filter) => {
    onFilterChange(filter);
  };

  return (
    <div className="tabsContainer">
      {filterTabs.map((tab) => (
        <div
          key={tab.id}
          className="tab"
          onClick={() => handleClick(tab.title)}
        >
          {tab.icon && <tab.icon className="img" />}
          <h4>{tab.title}</h4>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FilterTabs;
