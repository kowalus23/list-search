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

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term)
  };

  render() {
    return (
      <div className={'ui segment'}>
        <form onSubmit={this.onFormSubmit} className={'ui form'}>
          <label className={'field'} htmlFor="search">Image Search</label>
          <input
            type="search"
            value={this.state.term}
            placeholder={'Search...'}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;

