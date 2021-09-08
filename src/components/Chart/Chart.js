import ChartBar from "./ChartBar";
import './Chart.css'


function Chart(props){
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue);

    return(
        <div className="chart">
        {props.dataPoints.map(dataPoint=> 
        <ChartBar value={dataPoint.value}
        key ={dataPoint.label} //unique identifier
        label={dataPoint.label} 
        maxVal={totalMaximum}/>)}

        </div>
    )
};

export default Chart;