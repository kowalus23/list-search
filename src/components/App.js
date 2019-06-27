import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    }
  }

  onSearchSubmit = async (term) => {
     const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: 30 },
    });

     console.log(response);

     this.setState({images: response.data.results})

  };

  render() {
    return (
      <div className={'ui container'} style={{marginTop: '20px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} found={this.state.images.length}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default App;