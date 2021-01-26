import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.getSearchProducts(this.state.query)
      .then(() => this.props.history.push(`/search/${this.state.query}`))
  }

  update(e) {
    e.preventDefault();
    this.setState({ query: e.target.value })
  }


  //BIND update


  render() {
    // if (!this.props.getSearchProducts) {
    //   return null
    //  }
    return (
      <div className="search-bar-container">
        <form onSubmit={this.handleSubmit} className="search-form">
          <input className="search-field" type="search" placeholder="Search" onChange={this.update} />
          <button className="search-button">
            
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
