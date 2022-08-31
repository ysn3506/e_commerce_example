import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

FilterFrame.propTypes = {
    children: PropTypes.node.isRequired,
    title:PropTypes.string.isRequired
};

function FilterFrame({children,title}) {
    return (
      <div className="filter-wrapper">
        <h2 className="filter-title">{title}</h2>
        {children}
      </div>
    );
}

export default FilterFrame;