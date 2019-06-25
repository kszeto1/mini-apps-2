import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form action="" method="get" className="search-form" onSubmit={this.props.handleSearch}>
        <div className="search-form">
          <label htmlFor="name">Search historical events by keyword: </label>
          <input type="text" name="search" id="search" onChange={this.props.handleChange} required />
          <input type="submit" value="search" />
        </div>
      </form>
    )
  }
}

export default SearchForm;