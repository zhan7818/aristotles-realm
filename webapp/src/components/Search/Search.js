import React, { Component } from "react";
import Searchbar from "./Searchbar";
import "./style.css";
const myname = "yolanda"

class Search extends Component {
  state = {
    searchKeyword: "",
    searchResult: {}
  };

  
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
    // console.log(value)
  };


    searchStory = (allStories, searchKeyword) => {
        // return a list of stories whose name contains `this.state.searchKeyword`
        function getStoryByKeyword(allMatched, key){
            if(key.toLowerCase().includes(searchKeyword.toLowerCase()) || key.toUpperCase().includes(searchKeyword.toUpperCase())){
                allMatched[key] = allStories[key]
            }
            // console.log(this.state)
            return allMatched
        }
        const matchedStories = Object.keys(allStories).reduce(getStoryByKeyword, {})
        
        // update state and log the search result in the console
        this.setState((state) => ({searchResult : matchedStories}), () => {console.log(Object.keys(this.state.searchResult))})
        
    }

  render() {
    return (
      <div>
        <h1 className="search-header"> Search stories with keywords... </h1>
        <Searchbar
          allStories={this.props.data}
          searchKeyword={this.state.searchKeyword}
          handleChange={this.handleChange}
          searchStory={() => this.searchStory(this.props.data, this.state.searchKeyword)}
        ></Searchbar>
      </div>
    );
  }
}

export default Search;
