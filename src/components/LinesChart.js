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
import Loader from "./Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LinesChart = () => {

const [apidata , setApiData]=useState([]);
const coin="bitcoin";
const currency="inr";
const[changeDate]=useState("365");
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
      backgroundColor: '#00f2c3',
      borderColor:'#00f2c3',
    },
    
  ],
};
    return (
        <>
        <div style={{ margin:"0 auto",background: '#27293d'}}>
        {loading ? (<Loader/>):( <Line options={options} data={data} />)}
            </div>
            
        </>
    )
}

export default LinesChart
