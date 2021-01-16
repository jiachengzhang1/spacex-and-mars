import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Countdown from "../components/Countdown";
import { fetchNextUpcomingLaunch } from "../redux/actions";

const UpcomingLaunch = ({ className }) => {
    const dispatch = useDispatch();

    const { loading, launch, error } = useSelector(
        ({ upcomingLaunch }) => upcomingLaunch
    );

    useEffect(() => {
        dispatch(fetchNextUpcomingLaunch());
    }, [dispatch]);

    if (loading || !launch) {
        return <div>Loading</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    const { name, details, date_utc, rocket } = launch;

    return (
        <div className={`upcoming-launch ${className}`}>
            <h2>Upcoming Launch</h2>
            <hr />
            <h3>{name}</h3>
            <img
                className="img-fluid"
                src="https://jzhangdeveloper.s3-us-west-2.amazonaws.com/47926144123_84745c353a_c.jpg"
            />
            <p>{details}</p>
            <p>
                <span>Rocket:</span> {rocket.name}
            </p>
            <Countdown date={date_utc} />
            <button>Add to Calender</button>
        </div>
    );
};

export default UpcomingLaunch;
