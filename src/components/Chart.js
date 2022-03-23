import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Button } from "@material-ui/core";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {

const [apidata , setApiData]=useState([]);
const coin="ethereum";
const currency="inr";
const[changeDate,setChangeDate]=useState("365");
const [loading, setLoading] = useState(true);
let date;
    

    useEffect(() => {
        const apiData=async()=>{
        const ApiUrl=`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${changeDate}`
        const response= await fetch(ApiUrl)
        const data= await response.json()
        setApiData(data.prices)
        setLoading(false)
    }
        apiData();
    }, [changeDate])

 const options = {
  responsive: true,
  plugins: {
    
  },
};
    const labels =apidata.map((element)=>{
       date= (new Date(element[0]).toLocaleDateString());
          return(
              date
          )
      });
console.log(date);
 const data = {
  labels,
  datasets: [
      {
       label: `Price ${date} in $`,
    data:  apidata.map((element)=>{
          return(
               element[1]
          )
      }),
      backgroundColor: '#ff8d72',
      borderColor:'#ff8d72',
      radius:'0'
    },
    
  ],
};
    return (
        <>
        <div style={{ margin:"0 auto",background: '#27293d'}}>
        {loading ? (<h3>Loading.......</h3>):( <Line options={options} data={data} />)}
            </div>
            <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <Button  size="medium" color="primary" variant="contained" onClick={()=>{
                setLoading(true)
                setChangeDate(1)}}>1day</Button >
            <Button size="medium"  color="primary" variant="contained"  onClick={()=>{setLoading(true) 
                setChangeDate(30)}}>30days</Button >
            <Button   size="medium" color="primary" variant="contained" onClick={()=>{setLoading(true)
                setChangeDate(60)}}>60Days</Button >
            <Button  size="medium" color="primary" variant="contained" onClick={()=>{setLoading(true)
                setChangeDate(365)}}>1year</Button>
            </Box>
        </>
    )
}

export default Chart
