import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ components }) => {
  return (
    <ul className="navigation">
      {components.map(name => {
        return (
          <li key={name}>
            <a href={`#${name}`}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
