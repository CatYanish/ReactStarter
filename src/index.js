import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyDadaMRvYYtnGBpf0gp_Ze0rv5IzVJVbxA'


YTSearch({key: API_KEY, term: 'surfboads'}, function(data) {
  console.log(data);
})
//create a new component
//should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's HTML and
//put in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
