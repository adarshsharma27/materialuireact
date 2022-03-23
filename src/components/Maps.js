import React, { useState, useEffect } from "react";
import { Grid, Container, Hidden} from "@material-ui/core";
import Map, { FullscreenControl, NavigationControl, Marker, Popup } from "react-map-gl";
import RoomIcon from "@material-ui/icons/Room";
import SideNav from "./SideNav";
import Tables from "./Tables";

const Maps = () => {
    const [apiData, setApiData] = useState();

    useEffect(() => {
        const apiData = async () => {
            const ApiUrl = `https://randomuser.me/api/?results=100`;
            const response = await fetch(ApiUrl);
            const data = await response.json();
            setApiData(data.results);
        };
        apiData();
    }, []);
    return (
        <>
            <Grid container justifyContent="center">
                <Hidden smDown>
                    <Grid item xs={12} md={2}>
                        <SideNav />
                    </Grid>
                </Hidden>
                  <Grid item xs={12} md={10}>
                  <Container>
                  <Map
                initialViewState={{
                    longitude: 22,
                    latitude: 22,
                    zoom: 3.5,
                }}
                style={{ width: "100%", height: "100vh" }}
                mapStyle="mapbox://styles/mapbox/dark-v10"
                mapboxAccessToken={process.env.REACT_APP_API_KEY}
            >
                <FullscreenControl />
                <NavigationControl />

                {apiData !== undefined
                    ? apiData.map((element) => {
                          return (
                              <>
                                  <Marker longitude={element.location.coordinates?.longitude} latitude={element.location.coordinates?.latitude} anchor="top" >
                                      {element.location.coordinates?.longitude <= -10 ? <RoomIcon color="primary" style={{ fontSize: "2.5rem" }} /> : <RoomIcon color="secondary" style={{ fontSize: "2.5rem" }} />}
                                      
                                    </Marker>
                                      <Popup longitude={element.location.coordinates?.longitude} latitude={element.location.coordinates?.latitude} anchor="bottom"  style={{color:'#000'}}>
                                          {element.location.city}                                          
                                      </Popup>
                                      
                                      
                                  
                              </>
                          );
                      })
                    : "<h2>Loading.........</h2"}
            </Map>
</Container>
<Tables/>
                  </Grid>
</Grid>
                    </>
    );
};

export default Maps;
