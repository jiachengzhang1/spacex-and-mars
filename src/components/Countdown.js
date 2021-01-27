import React, { useState } from "react";
import { useEffect } from "react";
import CountdownDigit from "./CountdownDigit";

const Countdown = ({ date, goal }) => {
    const [remainTime, setRemainTime] = useState(getRemainTime(date));
    useEffect(() => {
        const timer = setInterval(() => {
            setRemainTime(getRemainTime(date));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const { days, hours, minuties, seconds } = getRemainTime(date);

    return (
        <div className="countdown">
            <CountdownDigit digit={days} unit="DAYS" />
            <CountdownDigit digit={hours} unit="HOURS" />
            <CountdownDigit digit={minuties} unit="MINS" />
            <CountdownDigit digit={seconds} unit="SECS" />
            <CountdownDigit digit="UNTILL" unit={goal.toUpperCase()} />
        </div>
    );
};

function getRemainTime(date) {
    const remain = new Date(date) - new Date();

    return {
        days: Math.floor(remain / (24 * 60 * 60 * 1000)),
        hours: Math.floor((remain % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)),
        minuties: Math.floor((remain % (60 * 60 * 1000)) / (1000 * 60)),
        seconds: Math.floor((remain % (1000 * 60)) / 1000),
    };
}

export default Countdown;
