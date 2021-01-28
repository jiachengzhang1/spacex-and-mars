import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLaunchesStats } from "../redux/actions";
import { Bar } from "@reactchartjs/react-chart.js";

const data = {
    labels: [
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
    ],
    datasets: [
        {
            type: "line",
            label: "TOTAL LAUNCHES",
            display: false,
            borderColor: "royalblue",
            borderWidth: 2,
            fill: false,
            data: [1, 1, 2, 1, 2, 0, 2, 3, 6, 7, 9, 18, 21, 13, 26, 2],
        },
        {
            label: "SUCCESS",
            data: [0, 0, 1, 1, 2, 0, 2, 3, 6, 6, 8, 18, 21, 13, 26, 2],
            backgroundColor: "#8884d8",
        },
        {
            label: "FAILED",
            data: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
            backgroundColor: "#FF0000",
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                stacked: true,
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
        xAxes: [
            {
                stacked: true,
            },
        ],
    },
};

function compute(points) {
    const d = [];
    let currYear = new Date(points[0].date_utc).getUTCFullYear();
    let s = 0,
        f = 0;
    points.forEach(({ success, date_utc }) => {
        const year = new Date(date_utc).getUTCFullYear();
        console.log(year);
        if (currYear !== year) {
            d.push({ name: currYear, success: s, failed: f });
            currYear = year;
            s = 0;
            f = 0;
        }
        success ? s++ : f++;
    });
    console.log(d);

    points.forEach(({ success, date_utc, cores }) => {
        const reused = cores[0];
    });

    return d;
}

const LaunchChart = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLaunchesStats());
    }, [dispatch]);
    const { loading, stats, error } = useSelector(
        ({ launchesStats }) => launchesStats
    );

    if (loading || Object.keys(stats).length === 0) {
        return <div>Loading</div>;
    }
    const { docs } = stats;
    console.log(docs);
    console.log(compute(docs));
    return (
        <div className="statistics">
            <h3># LAUNCHES</h3>
            <Bar data={data} options={options} width={90} height={60} />
        </div>
    );
};
export default LaunchChart;
