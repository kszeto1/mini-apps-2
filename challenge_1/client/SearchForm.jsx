import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form action="" method="get" class="search-form">
        <div class="search-form">
          <label for="name">Search historical events by keyword: </label>
          <input type="text" name="search" id="search" required />
          <input type="submit" value="search" />
        </div>
      </form>
    )
  }
}

export default SearchForm;