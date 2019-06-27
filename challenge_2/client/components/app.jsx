import React from 'react';
import axios from 'axios';
import TimeSeriesChart from './Chart.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {},
      // data: null,
      // dates: null
    };
  }

  componentDidMount() {
    const url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-06-26&end=2019-06-26';

    axios.get(url)
    .then((res) => {
      const dates = Object.keys(res.data.bpi);
      const data = Object.values(res.data.bpi);
      let chartData = {
        labels: dates,
        datasets: [
          {
            label: 'BTC Price history past year',
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
    if (this.state.historicalPrices === null) {
      return <div></div>
    }
    console.log(this.state);
    const { chartData } = this.state;

    return (
      <TimeSeriesChart chartData={chartData}/>
    )
  }
}

export default App;

