import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Avatar, Container } from '@material-ui/core';

const useStyles = makeStyles({
    conatainer: {
        boxShadow: "0 5px 10px 0 rgb(0 0 0 / 8%)",
        padding: "10px",
        margin: "40px auto",
        background: '#27293d'
    }
});

const Posts = () => {
        const classes = useStyles();
        const[posts,setPosts]=useState([])
const getPosts=async()=>{
    const ApiUrl=`https://dummyapi.io/data/v1/post?limit=10`;
    const response= await fetch(ApiUrl,{
        headers: {
            'app-id':'620c93849bb74758add0aadc'
    }});
    const data= await response.json();
    setPosts(data.data);
}
useEffect(()=>{

 getPosts();
},[])

  return (
    <>
     <Container className={classes.conatainer}>
     <List component="nav">
     {
         posts.map((element)=>{
             return(
                 <>
                 <ListItem button key={element.id}>
          <ListItemIcon>
            <Avatar alt={element.text} src={element.image}/>
          </ListItemIcon>
          <ListItemText primary={element.text} secondary={<p>Likes:{element.likes}</p>}></ListItemText>

        </ListItem>
                 </>

        
             )
         })
        }
        </List>
     
        
     
     </Container>
      
    </>
  )
}

export default Posts