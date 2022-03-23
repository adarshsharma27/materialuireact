import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Container, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Loader from "./Loader";
const Tables = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState("5");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            const ApiUrl = `https://dummyapi.io/data/v1/post?limit=6&page=${page}`;
            const response = await fetch(ApiUrl, {
                headers: {
                    "app-id": "620c93849bb74758add0aadc",
                },
            });
            const data = await response.json();
            setPosts(data.data);
            setLoading(false);
        };
        getPosts();
    }, [page]);
    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Container
                        style={{
                            margin: "30px 0px",
                        }}
                    >
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center"> Avatar </TableCell>
                                        <TableCell align="center"> Date </TableCell> <TableCell align="center"> Likes </TableCell>
                                        <TableCell align="center"> Title </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {" "}
                                    {loading ? (
                                        <Loader />
                                    ) : (
                                        posts.map((element) => {
                                            let date = new Date(element.publishDate);
                                            return (
                                                <>
                                                    <TableRow key={element.id}>
                                                        <TableCell align="center">
                                                            {" "}
                                                            <Avatar alt={element.text} src={element.image} />
                                                        </TableCell>
                                                        <TableCell align="center"> {date.toLocaleString()} </TableCell>
                                                        <TableCell align="center"> {element.likes} </TableCell>
                                                        <TableCell align="center"> {element.text} </TableCell>{" "}
                                                    </TableRow>
                                                </>
                                            );
                                        })
                                    )}
                                </TableBody>{" "}
                            </Table>{" "}
                            <Container>
                                <Pagination
                                    style={{
                                        padding: "10px 0px",
                                    }}
                                    count={posts.length}
                                    hidePrevButton
                                    hideNextButton
                                    onChange={(e) => {
                                        setLoading(true);
                                        setPage(e.target.innerText);
                                    }}
                                    color="primary"
                                    justifyContent="center"
                                />
                            </Container>{" "}
                        </TableContainer>{" "}
                    </Container>{" "}
                </Grid>{" "}
                <Grid item xs={12} md={6}>
                    <Container
                        style={{
                            margin: "30px 0px",
                        }}
                    >
                        <TableContainer>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center"> Avatar </TableCell>
                                        <TableCell align="center"> Date </TableCell>
                                        <TableCell align="center"> Likes </TableCell> <TableCell align="center"> Title </TableCell>{" "}
                                    </TableRow>{" "}
                                </TableHead>{" "}
                                <TableBody>
                                    {" "}
                                    {posts.map((element) => {
                                        let date = new Date(element.publishDate);
                                        return (
                                            <>
                                                <TableRow key={element.id}>
                                                    <TableCell align="center">
                                                        {" "}
                                                        <Avatar alt={element.text} src={element.image} />
                                                    </TableCell>
                                                    <TableCell align="center"> {date.toLocaleString()} </TableCell> <TableCell align="center"> {element.likes} </TableCell> <TableCell align="center"> {element.text} </TableCell>{" "}
                                                </TableRow>{" "}
                                            </>
                                        );
                                    })}
                                </TableBody>{" "}
                            </Table>{" "}
                        </TableContainer>{" "}
                        <Container>
                            <Pagination
                                style={{
                                    padding: "10px 0px",
                                }}
                                count={posts.length}
                                hidePrevButton
                                hideNextButton
                                onChange={(e) => {
                                    setPage(e.target.innerText);
                                }}
                                color="primary"
                                justifyContent="center"
                            />
                        </Container>{" "}
                    </Container>{" "}
                </Grid>
            </Grid>
        </>
    );
};

export default Tables;
