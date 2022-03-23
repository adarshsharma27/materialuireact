import SideNav from "./SideNav";
import {Container, Grid, Hidden } from "@material-ui/core";
import Posts from "./Posts";
import Authors from "./Authors";
import MainChart from "./MainChart";
import Cards from "./Cards";


function App() {
    return (
        <>
        <Grid container justifyContent="center">
        <Hidden smDown>
         <Grid item xs={12} md={2}>
                        <SideNav/>
                    </Grid>
                    </Hidden>
                    
                    <Grid item xs={12} md={10}>
                    <Cards/>
                          <MainChart/>
                          <Container >
                           <Grid container  spacing={2}  justifyContent="center">
                          <Grid item xs={12} md={6}>
                          <Posts/>
                          
                          </Grid>
                          <Grid item xs={12} md={6}>
                          <Authors/>
                          
                          </Grid>
                          </Grid>
                          </Container>
                    </Grid>
                         
                    
                    
                   
        </Grid>
        </>
    );
}

export default App;
