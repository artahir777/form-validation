import React, { useState } from "react";
import "./style.scss";

export function ValueSelector(props) {
  const { heading } = props;

  const [isPercentageDisabled, setPercentageDisabled] = useState(false);
  const [isNumericDisabled, setNumericDisabled] = useState(false);

  const [percentageValue, setPercentageValue] = useState();
  const [numericValue, setNumericValue] = useState();

  const handlePercentageChange = (e) => {
    e.target.checked ? setNumericDisabled(true) : setNumericDisabled(false);
  };





  const handleNumericChange = (e) => {
    e.target.checked
      ? setPercentageDisabled(true)
      : setPercentageDisabled(false);
  };

  const handlePercentageValueChange = (e) => {
    if (e.target.value >= 0 && e.target.value <= 100) {
      setPercentageValue(e.target.value);
    } else {
      setPercentageValue(100);
    }
  };

  const handleNumericValueChange = (e) => {
    if (e.target.value >= 0) {
      setNumericValue(e.target.value);
    } else {
      setNumericValue(0);
    }
  };





  
  return (
    <div className="column-wrapper">
      <h3 className="column-title">{heading}</h3>
      <div className="value-selector">
        <div className="percentage-value">
          <input
            type="checkbox"
            onChange={handlePercentageChange}
            disabled={isPercentageDisabled}
          />
          <input
            className = "percent-number"
            type="number"
            value={percentageValue}
            onChange={handlePercentageValueChange}
            disabled={isPercentageDisabled}
            min="0"
          />
          <span>%</span>
        </div>
        <div className="numeric-value">
          <input
            type="checkbox"
            onChange={handleNumericChange}
            disabled={isNumericDisabled}
          />
          <input
            type="number"
            value={numericValue}
            onChange={handleNumericValueChange}
            disabled={isNumericDisabled}
            min="0"
            max="100"
          />
          <span>$</span>
        </div>
      </div>
    </div>
  );
}
