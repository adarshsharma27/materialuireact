import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Typography, Card, CardContent, CardMedia, Container} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    conatainer: {
        boxShadow: "0 5px 10px 0 rgb(0 0 0 / 8%)",
        margin: "0 10px",
        textAlign: "center",
        padding: "15px",
        backgroundColor: "#27293d",
        color: "#fff",
        height: "180px",
    },
    textsecondary: {
        color: "hsla(0,0%,100%,.6)",
        textAlign:'center'
    },
});

const Sliders = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const classes = useStyles();
    const [author, setAuthor] = useState([]);
    const getData = async () => {
        const ApiUrl = `https://dummyapi.io/data/v1/user?limit=10&page=2`;
        const response = await fetch(ApiUrl, {
            headers: {
                "app-id": "620c93849bb74758add0aadc",
            },
        });
        const data = await response.json();
        setAuthor(data.data);
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Container style={{ padding: "40px 20px" }}>
             <Typography gutterBottom variant="h3" component="h3" style={{ textTransform: "capitalize" }} className={classes.textsecondary}>
                                                Our Team
                                            </Typography>
                <Slider {...settings} className={classes.slider}>
                    {author.map((element) => {
                        return (
                            <>
                                <Card className={classes.conatainer}>
                                    
                                        <CardMedia image={element.picture} title={element.text} style={{ height: "80px", width: "80px", borderRadius: "50%", objectFit: "cover", margin: " 0 auto" }} />
                                        <CardContent>
                                            <Typography gutterBottom variant="p" component="h4" style={{ textTransform: "capitalize" }} className={classes.textsecondary}>
                                                {element.title}
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="h3">
                                                {element.firstName} {element.lastName}
                                            </Typography>
                                        </CardContent>
                                    
                                </Card>
                            </>
                        );
                    })}
                </Slider>
            </Container>
        </>
    );
};

export default Sliders;
