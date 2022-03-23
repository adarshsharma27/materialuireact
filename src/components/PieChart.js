import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie} from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PieChart = () => {

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
    data:apidata.map((element)=>{
          return(
               element.price
          )
      }),
      backgroundColor:['#1d8cf8','#235287'],
      borderColor:"#fff"
    },
    
  ],
};
    return (
        <>
        <div style={{ margin:"0 auto",background: '#27293d',padding:'40px 0px'}}>
        <h3 style={{textAlign:'center'}}>Pie Chart</h3>
        {loading ? (<h3 style={{textAlign:'center'}}>Loading.......</h3>):( <Pie  data={data} />)}
            </div>
        </>
    )
}

export default PieChart
