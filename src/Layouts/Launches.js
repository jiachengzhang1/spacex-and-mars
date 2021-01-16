import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import { fetchLaunches } from "../redux/actions";

const Launches = () => {
    const dispatch = useDispatch();

    const { page, searchText } = useSelector(({ query }) => {
        return query;
    });

    useEffect(() => {
        dispatch(fetchLaunches({ page, search: searchText }));
    }, [dispatch, page, searchText]);

    const { loading, launches, error, totalPages } = useSelector(
        ({ launches }) => {
            const { docs, totalPages } = launches.launches;
            return {
                loading: launches.loading,
                launches: docs,
                error: launches.error,
                totalPages,
            };
        }
    );

    if (loading || !launches) {
        return <div>Loading</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="launches">
            <SearchBar />
            <Table launches={launches} />
            <Pagination totalPages={totalPages} />
        </div>
    );
};

export default Launches;
