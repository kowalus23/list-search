import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    })
  };

  hasFound = () => {
    if (this.props.found > 0) {
      return <h2 className={'found'}>Found {this.props.found} images</h2>
    }
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  };

  render() {
    return (
        <div className={'ui segment'}>
          <form onSubmit={this.onFormSubmit} className={'ui form'}>
            <input
              type="search"
              value={this.state.term}
              placeholder={`Image searcher... (write a word)`}
              onChange={this.onInputChange}
            />
            { this.hasFound() }
          </form>
        </div>
    )
  }
}

export default SearchBar;

