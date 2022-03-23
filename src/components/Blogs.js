import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Pagination from '@material-ui/lab/Pagination';
import {  Typography, Grid, Container,Box, Hidden } from "@material-ui/core";
import SideNav from './SideNav';
import Loader from './Loader';

const useStyles = makeStyles({
    conatainer: {
        boxShadow: "0 5px 10px 0 rgb(0 0 0 / 8%)",
        height:'420px',
          backgroundColor: '#27293d',
    },
    textPrimary:{
     color:'#fff'
    },
    textSecondary:{
       color:'#9a9a9a!important'
    }
});

const Blogs = () => {
        const classes = useStyles();
        const[posts,setPosts]=useState([])
        const[page,setPage]=useState("0")
        const[loading,setLoading]=useState(true);

useEffect(()=>{
const getPosts=async()=>{
    const ApiUrl=`https://dummyapi.io/data/v1/post?limit=10&page=${page}`;
    const response= await fetch(ApiUrl,{
        headers: {
            'app-id':'620c93849bb74758add0aadc'
    }});
    const data= await response.json();
    setPosts(data.data);
    setLoading(false)
}
 getPosts();
},[page])

  return (
    <>



     <Grid container justifyContent="center">
        <Hidden smDown>
         <Grid item xs={12} md={2}>
                        <SideNav/>
                    </Grid>
                    </Hidden>
       <Grid item xs={12} md={10}>
       <Container style={{ padding: "40px 20px" }}>
                <Grid container spacing={3}>
                   
{ loading ?( <Loader/>): posts.length!==0 ? (
         posts.map((element)=>{
           let tag =element.tags;
           let date= new Date(element.publishDate);
             return(
                 
                 
                                <Grid item xs={12} md={4} key={element.id}>
                                    
     <Card className={classes.conatainer} >
      <CardHeader className={classes.textSecondary} 
        avatar={
          <Avatar alt={element.text} src={element.owner.picture}/>
        }
        title={element.text.split(".")[0]}
        subheader={date.toLocaleString()} 
      />
      <CardMedia
        image={element.image}
        title={element.text} style={{height:'200px'}}
      />
      <CardContent>
       <Box display="flex" flexWrap="nowrap" flexDirection="row" justifyContent="start">
       {tag.map((elem,index) => {
                    return(
                        
                        <Typography variant="body1" key={index} className={classes.textPrimary}  style={{padding:'0px 2px'}} component="p">#{elem}</Typography>
                        
                    )
                  })
                }
                </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon color="secondary"/> <Typography variant="body1"  component="p" className={classes.textSecondary} >{element.likes}
        </Typography>
        </IconButton>
        <IconButton aria-label="settings">
            <CheckCircleIcon color="primary"/>
          </IconButton >
      </CardActions>

    </Card>
                                
                                
                                    </Grid>
                      
                                    
                                    
                                    
                                    )
                                  })):(<Box></Box>)
                                }
                                </Grid>

                            
                <Container style={{paddingTop:'1rem'}}  >
                
                <Pagination  count={posts.length} hidePrevButton hideNextButton  onChange={(e)=>{
                  setLoading(true)
                  setPage(e.target.innerText);
                    window.scroll(0,0)}}  color="primary" justifyContent="center" />
                </Container>
                </Container>





       
       </Grid>
                    </Grid>














     
        
     

      
    </>
  )
}

export default Blogs