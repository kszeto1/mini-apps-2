import React from 'react';
import Axios from 'axios';
import SearchForm from './SearchForm.jsx';
import SearchResults from './SearchResults.jsx';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryResults: [],
      query: ''
    }

    this.getSearchResults = this.getSearchResults.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  getSearchResults(e) {
    e.preventDefault();
    const limit = 10;
    Axios.get(`/events?q=${this.state.query}`)
    .then((res) => {
      this.setState({pageCount: res.data.length/limit}, () => {
        Axios.get(`/events?q=${this.state.query}&_page=1&_limit=10`)
        .then((res) => {
          this.setState({queryResults: res.data});
        })
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    })
  }

  handlePageClick(e) {
    let selected = e.selected;
    Axios.get(`/events?q=${this.state.query}&_page=${selected + 1}&_limit=10`)
    .then((res) => {
      this.setState({queryResults: res.data});
    })
    .catch((err) => {
      console.log(err);
    })
  };


  render() {
    console.log('state', this.state);
    return (
      <div>
        <SearchForm handleSearch={this.getSearchResults} handleChange={this.handleChange}/>
        <SearchResults records={this.state.queryResults}/>
        <ReactPaginate  
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={10}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
      />
      </div>
    )
  }
};

export default App;