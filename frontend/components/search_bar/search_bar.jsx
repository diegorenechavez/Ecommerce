import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  //BIND update

  // handleSubmit
  //  update(e){
  //     e.preventDefault();
  //     this.setState({ query: e.target.value})
  // }

  render() {
    return (
      <div className="search-bar-container">
        {/* onSubmit={this.handleSubmit} */}
        <form>
          <input className="search-field" type="search" placeholder="Search..." />
          {/* <button className="search-button">
            S
          </button> */}
        </form>
      </div>
    );
  }
}

export default SearchBar;
