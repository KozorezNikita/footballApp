import React from "react";
import { Link } from "react-router-dom";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faFutbol } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ players, selected, setSelected, toggle, setToggle }) {
  return (
    <div className="searchbar">
      <MySelect
        value={selected.team}
        onChange={(sort) => setSelected({ ...selected, team: Number(sort) })}
        defaultValue="sort by"
        options={[
          { value: 1, name: "Olympique Lyonnais" },
          { value: 3, name: "Lille" },
        ]}
      />
      <div>
        <span onClick={() => setToggle(true)}>
          <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
        </span>
        <span onClick={() => setToggle(false)}>
          <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>
        </span>
      </div>
      <p> {players.length} </p>
    </div>
  );
}

export default SearchBar;
