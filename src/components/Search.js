import { useEffect, useState } from "react";
import { Box, Select, Typography, MenuItem, FormControl, InputLabel, TextField, Toolbar, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from '@material-ui/lab/Pagination';
import Cards from "../components/Cards";
import Loader from "./Loader";
import { motion } from "framer-motion"
const useStyles = makeStyles({
    search: {
        padding: "20px",
        boxShadow: "0 5px 35px 0 rgb(0 0 0 / 8%)",
        margin: "0 auto",
    },
    input: {
        width: "100%",
    },
    inputSelect: {
        width: "100%",
        margin: "0 auto",
    },
});
const Search = () => {
    const [search, setSearch] = useState("");
    const [images, setImages] = useState([]);
    const [perPage, setPerPage] = useState(10);
    const [offSet, setOffSet] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getImages = async () => {
            const ApiUrl = `https://www.breakingbadapi.com/api/characters?name=${search}&limit=${perPage}&offset=${offSet}`;
            const response = await fetch(ApiUrl);
            const data = await response.json();
            setImages(data);
            setLoading(false);
        };
        getImages();
    }, [search, perPage,offSet]);
    const classes = useStyles();
    return (
        <>
            <Box container boxShadow={3} className={classes.search}>
                <Toolbar>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={10}>
                            <TextField
                                id="standard-basic"
                                color="inherit"
                                variant="outlined"
                                label="Search"
                                className={classes.input}
                                onChange={(e) => {
                                    setLoading(true);
                                    setSearch(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <FormControl variant="outlined" className={classes.inputSelect}>
                                <InputLabel id="demo-simple-select-helper-label" color="inherit">
                                    Image No.
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    color="inherit"
                                    onChange={(e) => {
                                        setLoading(true);
                                        setPerPage(e.target.value);
                                    }}
                                >
                                    <MenuItem value={8}>
                                        <em>Default</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Box>
            <Container style={{ padding: "40px 20px" }}>
                <Grid container spacing={4}>
                    {loading ? (
                        <Loader />
                    ) : images.length ? (
                        images.map((element) => {
                            let { char_id, name, birthday, img, status, nickname } = element;
                            return (
                                <Grid item xs={12} md={3} key={char_id}>
                                <motion.div animate={{ y: 20, }}
    transition={{ duration: 2 }}>
  
                                    <Cards char_id={char_id} name={name} img={img} status={status} nickname={nickname} birthday={birthday}/>
                                
                                    </motion.div>
                                    </Grid>
                            );
                        })
                    ) : (
                        <Typography variant="h6">No Data Found</Typography>
                    )}
                </Grid>
                <Container style={{paddingTop:'4rem'}}  >
                
                <Pagination count={images.length} onChange={()=>{
                    setOffSet(offSet+1) 
                    console.log(offSet)
                    window.scroll(0,150)}} variant="outlined"  color="primary" justifyContent="center" />
                </Container>
                </Container>
                </>
    );
};

export default Search;
