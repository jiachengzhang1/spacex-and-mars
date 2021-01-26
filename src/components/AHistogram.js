import React, { PureComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    LineChart,
    Line,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { fetchLaunchesStats } from "../redux/actions";

const data = [
    {
        name: "Page A",
        "New Booster": 4000,
        "Reused Booster": 2400,
        Failed: 2400,
    },
    {
        name: "Page B",
        "New Booster": 3000,
        "Reused Booster": 1398,
        Failed: 2210,
    },
    {
        name: "Page C",
        "New Booster": 2000,
        "Reused Booster": 9800,
        Failed: 2290,
    },
    {
        name: "Page D",
        "New Booster": 2780,
        "Reused Booster": 3908,
        Failed: 2000,
    },
    {
        name: "Page E",
        "New Booster": 1890,
        "Reused Booster": 4800,
        Failed: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

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
    return d;
}

const Histogram = () => {
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
        <ResponsiveContainer width="100%" height={445}>
            <BarChart
                data={compute(docs)}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip cursor={false} />
                <Legend />
                <Bar dataKey="success" stackId="a" fill="#8884d8" />
                <Bar dataKey="failed" stackId="a" fill="#FF0000" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Histogram;
