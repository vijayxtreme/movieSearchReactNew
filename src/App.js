import React, {Component} from 'react';
import SearchForm from "./SearchForm"
import MovieListings from "./MovieListings"
//import movies from "./movies"
import _ from "lodash-es"
import config from "./config"
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChangeDebounced = _.debounce(term =>{
    let key = config.omdbApiKey
    
    fetch(`http://www.omdbapi.com/?apikey=${key}&s=${term}`)
      .then(data => data.json())
      .then(data => {
        if(data.Search){
          this.setState({movies:data.Search})
        }
      })
  }, 300)

  handleChange(e){
    let term = e.target.value
    this.handleChangeDebounced(term)
  }

  render(){
    return (
      <div className="App">
        <SearchForm handleChange={this.handleChange}/>
        <MovieListings movies={this.state.movies} />
      </div>
    );
  } 
}

export default App;
