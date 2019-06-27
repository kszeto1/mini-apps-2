import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class TimeSeriesChart extends Component {
  
  render() {
    return (
      <div className="chart">
        <Line
          data={this.props.chartData}
          width={1000}
          height={500}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    )
  }
}

export default TimeSeriesChart;