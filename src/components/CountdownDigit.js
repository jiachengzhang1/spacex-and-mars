import React from "react";

const CountdownDigit = ({ digit, unit }) => {
    return (
        <div className="countdown-digit">
            <p>{digit}</p>
            <p>{unit}</p>
        </div>
    );
};

export default CountdownDigit;
