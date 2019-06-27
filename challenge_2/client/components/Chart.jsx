import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class TimeSeriesChart extends Component {
  render() {
    return (
      <div className="chart">
        <Line
          data={this.props.chartData}
          width={100}
          height={50}
          options={{}}
        />
      </div>
    )
  }

}

export default TimeSeriesChart;