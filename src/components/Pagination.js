import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import { setQueryPage } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            marginTop: theme.spacing(2),
            backgroundColor: "transparent",
        },
    },
}));

export default ({ totalPages }) => {
    const dispatch = useDispatch();

    const { page } = useSelector(({ query }) => query);

    const changePage = (event, value) => {
        event.preventDefault();
        dispatch(setQueryPage(value));
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination
                count={totalPages}
                page={page}
                onChange={changePage}
                shape="rounded"
            />
        </div>
    );
};
