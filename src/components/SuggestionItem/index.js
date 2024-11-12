import './index.css'
// Write your code here
const SuggestionItem = props => {
  const {suggestionsDetails, updateClicker} = props
  const {suggestion} = suggestionsDetails
  const onDelete = () => {
    updateClicker(suggestion)
  }

  return (
    <li className="list-container">
      <p className="name">{suggestion}</p>
      <button type="button" className="arrow-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
