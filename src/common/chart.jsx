import React, { Component } from 'react';
import ReactDOM, { render } from "react-dom";
import { Doughnut, Pie } from "react-chartjs-2";
import { chartColors } from "./color";
import arrow from '../assets/arrow_black.svg';


const options = {
  legend: {
    display: false,
    position: "bottom"
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};

const data = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["Completed survey", "Not completed survey"],
  datasets: [
    {
      data: [35,65],
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors
    }
  ]
};



class App extends Component {
render(){
  return (
    <div className="App">
      <div className="m-dropdown">
            <span className="m-text-3">All Projects</span>
           <img src={arrow} className="m-arrow"></img>
      </div>
      <div style={styles.relative} className="doughnut">
        <Doughnut data={data} options={options} />
        <div id="legend" />
      </div>
    </div>
  );
}
  
}

const styles = {
  relative: {
    position: "relative",
    width: "50%",
  }
};

export default App;