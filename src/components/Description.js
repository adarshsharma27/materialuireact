import {useState,useEffect} from 'react';
import {Typography,Box,Grid, Container } from "@material-ui/core";
import { useParams } from 'react-router-dom';
const Description = () => {
  const {id}=useParams();
  console.log(id);
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            const ApiUrl = `https://www.breakingbadapi.com/api/characters/${id}`;
            const response = await fetch(ApiUrl);
            const data = await response.json();
            setNews(data[0]);
        };
        getImages();
    }, [id]);



  return <>
  <Container>

  <Grid container style={{padding:'20px'}} spacing={4} justifyContent="center" alignItems="center">

                        <Grid item xs={12} md={6} >
                        
                          <Typography gutterBottom variant="h2" component="h2" style={{ fontSize:'1.8rem',color:'#4c505d'}}>
                                                {news.name}
                                            </Typography>
                          <Typography gutterBottom variant="h2" component="h2" style={{ fontSize:'1.8rem',color:'#4c505d'}}>
                                                {news.birthday}
                                            </Typography>
                          <Typography gutterBottom variant="h2" component="h2" style={{ fontSize:'1.8rem',color:'#4c505d'}}>
                                                {news.status}
                                            </Typography>
                          <Typography gutterBottom variant="h2" component="h2" style={{ fontSize:'1.8rem',color:'#4c505d'}}>
                                                {news.portrayed}
                                            </Typography>
                          <Typography gutterBottom variant="p" component="p" style={{fontSize: '1rem',
    lineHeight:'2rem',
    color:'hsl(201, 11%, 66%)',
    marginBottom:'1rem'}}>
{news.nickname}
                                            </Typography>
                                      
                          <Typography gutterBottom variant="p" component="p" style={{fontSize: '1rem',
    lineHeight:'2rem',
    color:'hsl(201, 11%, 66%)',
    marginBottom:'1rem'}}>
{news.appearance}
                                            </Typography>
                                       
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Box component="img" src={news.img} style={{width:'50%'}}></Box>
                        </Grid>
  
                        </Grid>
  
  
  </Container>
  </>;
};

export default Description;
