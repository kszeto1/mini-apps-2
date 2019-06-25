import React from 'react';
import SearchForm from './SearchForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchForm />
      </div>
    )
  }
};

export default App;