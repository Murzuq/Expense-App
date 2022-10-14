import './Chart.css';

const Chart = (props) => {
  console.log(props.dataPoints);
  return (
    <div>
      {props.dataPoints.map((dataPoint) => (
        <p>{dataPoint.label}</p>
      ))}
    </div>
  );
};

export default Chart;
