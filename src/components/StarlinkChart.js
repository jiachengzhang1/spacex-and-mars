import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar } from "@reactchartjs/react-chart.js";
import { fetchStarlinkStats } from "../redux/actions";

const StarlinkChart = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStarlinkStats());
    }, [dispatch]);
    const { loading, stats, error } = useSelector(
        ({ starlinkStats }) => starlinkStats
    );

    if (loading || Object.keys(stats).length === 0) {
        return <div>Loading</div>;
    }
    const { docs } = stats;
    const dd = docs
        .map(({ launch }) => {
            const { date_utc } = launch;
            const date = new Date(date_utc);
            // return date_utc;
            return `${date.getUTCFullYear()}-${
                date.getUTCMonth() + 1 < 10 ? "0" : ""
            }${date.getUTCMonth() + 1}`;
        })
        .sort();

    const labels = [];
    const freqs = [];
    let curr = "";
    let count = 0;
    dd.forEach((d) => {
        if (d !== curr) {
            labels.push(d);
            freqs.push(count);
            curr = d;
            count = 0;
        }
        count++;
    });

    const data = {
        labels,
        datasets: [
            {
                type: "bar",
                label: "TOTAL LAUNCHES",
                backgroundColor: "royalblue",
                data: freqs,
                borderColor: "white",
                borderWidth: 2,
            },
        ],
    };
    return (
        <div className="statistics">
            <h3># STARLINK SATELLITES</h3>
            <Bar data={data} width={90} height={60} />
        </div>
    );
};

export default StarlinkChart;
