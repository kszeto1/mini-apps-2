import React from 'react';
import axios from 'axios';
import TimeSeriesChart from './Chart.jsx';
import {Line} from 'react-chartjs-2';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {}
    };
  }

  componentDidMount() {
    const url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-06-01&end=2019-06-26';

    axios.get(url)
    .then((res) => {
      const dates = Object.keys(res.data.bpi);
      const data = Object.values(res.data.bpi);
      let chartData = {
        labels: dates,
        datasets: [
          {
            label: 'BTC Price history past month',
            borderColor: '#ff6485',
            fill: false,
            pointRadius: 0,
            lineTension: 0,
            borderWidth: 2,
            data: data
          }
        ]
      };
      this.setState({chartData: chartData});
    })
    .catch((err) => {
      throw err;
    });
  }

  render() {
    if (Object.entries(this.state.chartData).length === 0) {
      return <div></div>
    }
    const { chartData } = this.state;

    return (
      <TimeSeriesChart chartData={chartData}/>
    )
  }
}

export default App;

