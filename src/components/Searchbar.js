import React from "react"


export class Searchbar extends React.Component {
    state = {
        searchQuery:'',
    }


    onChange = (e) => {
        this.setState({searchQuery: e.currentTarget.value})
      }

      handleSubmit = (e) => {
        e.preventDefault()

        this.props.fetch(this.state.searchQuery)
        this.setState({searchQuery:''})
      }

// 

    render () {
    return <header className="Searchbar">
    <form onSubmit={this.handleSubmit} className="SearchForm">
      <button className="SearchForm-button button" type="submit" >
        <span className="button-label">Search</span>
      </button>
  
      <input onChange={this.onChange}
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        value={this.state.searchQuery}
        placeholder="Search images and photos"
      />
    </form>
  </header>
    }
    
}