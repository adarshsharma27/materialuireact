import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar} from 'react-chartjs-2';

ChartJS.register(
   CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {

const [apidata , setApiData]=useState([]);
const [loading, setLoading] = useState(true);
 

    useEffect(() => {
        const apiData=async()=>{
        const ApiUrl=`https://fakestoreapi.com/products`
        const response= await fetch(ApiUrl)
        const data= await response.json()
        setApiData(data)
        setLoading(false)
    }
        apiData();
    }, [])

 const options = {
  responsive: true,
  plugins: {
    
  },
};
    const labels =apidata.map((element)=>{

          return(
              element.rating.count
          )
      });

 const data = {
  labels,
  datasets: [
      {
       label: `Employee Data`,
    data:  apidata.map((element)=>{
          return(
               element.price
          )
      }),
      backgroundColor: '#e14eca',
      borderColor:'#e14eca',
      radius:'0'
    },
    
  ],
};
    return (
        <>
        <div style={{ margin:"0 auto",background: '#27293d'}}>
        {loading ? (<h3 style={{textAlign:'center'}}>Loading.......</h3>):( <Bar  options={options} data={data} />)}
            </div>
        </>
    )
}

export default BarChart
