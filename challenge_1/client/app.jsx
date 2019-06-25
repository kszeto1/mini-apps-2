import React from 'react';
import axios from 'axios';
import Axios from 'axios';
import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryResults: [],
      query: ''
    }

    this.getSearchResults = this.getSearchResults.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }
  getSearchResults(event) {
    event.preventDefault();
    Axios.get('/events?q=' + this.state.query)
    .then((res) => {
      this.setState({queryResults: res.data})
    })
    .catch((err) => {
      console.log(err);
    })
  }



  render() {
    return (
      <div>
        <SearchForm handleSearch={this.getSearchResults} handleChange={this.handleChange}/>
        <SearchResults records={this.state.queryResults}/>
      </div>
    )
  }
};

export default App;