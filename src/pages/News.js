import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../components/NewsCard";
import { fetchNews } from "../redux/actions";

const News = () => {
    const dispatch = useDispatch();
    const { loading, news, error } = useSelector(({ news }) => {
        return {
            loading: news.loading,
            news: news.news,
            error: news.error,
        };
    });

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    const newsCards = loading ? (
        <div>Loading...</div>
    ) : (
        news.map(({ id, ...newsDetail }) => {
            return (
                <>
                    <hr />
                    <Card key={id} newsDetail={newsDetail} />
                </>
            );
        })
    );

    return (
        <div className="news">
            <h1>LATEST SPACE NEWS</h1>
            <div className="row">
                <div className="col-md-9">{newsCards}</div>
                <div className="col-md-3">
                    <div className="news-sidebar">
                        <h2>MORE SPACE NEWS</h2>
                        <hr />
                        <p>NASASpaceflight</p>
                        <p>Spaceflight Now</p>
                        <p>NASA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
