import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearchButtonClick = event => {
    this.setState({searchInput: event.target.value})
  }

  updateClicker = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="image"
        />
        <div className="card-container shadow">
          <div className="search-balance">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input"
              value={searchInput}
              onChange={this.onSearchButtonClick}
            />
          </div>
        </div>
        <ul className="unorder">
          {searchResults.map(eachUser => (
            <SuggestionItem
              suggestionsDetails={eachUser}
              key={eachUser.id}
              onDeleteUser={this.onDeleteUser}
              updateClicker={this.updateClicker}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
