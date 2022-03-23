import React from "react";
import { Typography, Box, Grid, Container, Button, Hidden} from "@material-ui/core";
import SideNav from "./SideNav";
import Sliders from "./Sliders";

const AboutUs = () => {
    return (
        <>
            <Grid container justifyContent="center">
                <Hidden smDown>
                    <Grid item xs={12} md={2}>
                        <SideNav />
                    </Grid>
                </Hidden>

                <Grid item xs={12} md={10} style={{ padding: "20px", margin: "40px auto" }}>
                    <Container>
                        <Grid container spacing={4} justifyContent="center" alignItems="center">
                            <Grid item xs={12} md={6} style={{order:'2'}}>
                                <Typography gutterBottom variant="h2" component="h2" style={{ fontSize: "1.8rem", color: "#4c505d" }}>
                                    The Millennial Spirituality
                                </Typography>
                                <Typography gutterBottom variant="p" component="p" style={{ fontSize: "1rem", lineHeight: "2rem", color: "hsl(201, 11%, 66%)", marginBottom: "10px" }}>
                                    Energy Healer and Crystal Healing Consultant. She has been practicing Tarot from 2015 and the journey has continued ever since with many more successful milestones on the way. Her objective is to help
                                    people gain clarity on various aspects they feel ‘stuck’ with and flow in life.
                                </Typography>
                                <Button href="/" size="medium" color="primary" variant="contained" style={{ margin: "10px 0px" }}>
                                    Read More
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} style={{order:'1'}}>
                                <Box component="img" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" style={{ width: "100%" }}></Box>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container>
                        <Grid container spacing={4} justifyContent="center" alignItems="center">
                            <Grid item xs={12} md={6} style={{order:'2'}}>
                                <Typography gutterBottom variant="h2" component="h2" style={{ fontSize: "1.8rem", color: "#4c505d" }}>
                                    The Millennial Spirituality
                                </Typography>
                                <Typography gutterBottom variant="p" component="p" style={{ fontSize: "1rem", lineHeight: "2rem", color: "hsl(201, 11%, 66%)", marginBottom: "10px" }}>
                                    Energy Healer and Crystal Healing Consultant. She has been practicing Tarot from 2015 and the journey has continued ever since with many more successful milestones on the way. Her objective is to help
                                    people gain clarity on various aspects they feel ‘stuck’ with and flow in life.
                                </Typography>
                                <Button href="/" size="medium" color="primary" variant="contained" style={{ margin: "10px 0px" }}>
                                    Read More
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} style={{order:'1'}}>
                                <Box component="img" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" style={{ width: "100%" }}></Box>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container>
                        <Grid container spacing={4} justifyContent="center" alignItems="center">
                            <Grid item xs={12} md={6} style={{order:'2'}}>
                                <Typography gutterBottom variant="h2" component="h2" style={{ fontSize: "1.8rem", color: "#4c505d" }}>
                                    The Millennial Spirituality
                                </Typography>
                                <Typography gutterBottom variant="p" component="p" style={{ fontSize: "1rem", lineHeight: "2rem", color: "hsl(201, 11%, 66%)", marginBottom: "10px" }}>
                                    Energy Healer and Crystal Healing Consultant. She has been practicing Tarot from 2015 and the journey has continued ever since with many more successful milestones on the way. Her objective is to help
                                    people gain clarity on various aspects they feel ‘stuck’ with and flow in life.
                                </Typography>
                                <Button href="/" size="medium" color="primary" variant="contained" style={{ margin: "10px 0px" }}>
                                    Read More
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} style={{order:'1'}}>
                                <Box component="img" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" style={{ width: "100%" }}></Box>
                            </Grid>
                        </Grid>
                    </Container>
                    <Sliders/>
                </Grid>
            </Grid>
        </>
    );
};

export default AboutUs;
