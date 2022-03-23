import React, { useEffect, useState } from 'react'
import { Typography, Card, CardActionArea, CardContent, CardMedia,Container,Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    conatainer: {
        boxShadow: "0 5px 10px 0 rgb(0 0 0 / 8%)",
        margin:'0 auto',
        textAlign:'center',
        padding:'15px',
        backgroundColor: '#27293d!important',
        color:'#fff'
    },
    textsecondary:{
        color:'hsla(0,0%,100%,.6)'
    }
});


const Cards = () => {
    const classes = useStyles();
       const[author,setAuthor]=useState([])
const getData=async()=>{
    const ApiUrl=`https://dummyapi.io/data/v1/user?limit=6&page=7`;
    const response= await fetch(ApiUrl,{
        headers: {
            'app-id':'620c93849bb74758add0aadc'
    }});
    const data= await response.json();
    setAuthor(data.data);
}
useEffect(()=>{

 getData();
},[])
  return <>
            <Container style={{ padding: "40px 20px" }}>
                <Grid container spacing={4}>
                {
         author.map((element)=>{
             return(
                 <>
                 <Grid item xs={12} md={4} key={element.id}>
                                  <Card className={classes.conatainer}>
                    <CardActionArea>
                        <CardMedia image={element.picture} title={element.text} style={{ height: "80px", width:'80px',borderRadius:'50%', objectFit: "cover", margin:' 0 auto' }} />
                        <CardContent>
                        <Typography gutterBottom variant="p"  component="h4" style={{textTransform:'capitalize'}} className={classes.textsecondary}>
                            {element.title}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h3">
                            {element.firstName} {element.lastName}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                  
                  </Grid>
                  
                  </>
                  
                  
                  )
                })
            }
            </Grid>
    
                  
                </Container>
  
  </>;
};

export default Cards;
