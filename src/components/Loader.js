import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    loader: {
        width: "100%",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});
const Loader = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.loader}>
                <CircularProgress className={classes.loader} size={120} disableShrink />
            </div>
        </>
    );
};

export default Loader;
