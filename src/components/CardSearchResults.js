import { useSelector } from "react-redux";
import './CardSearchResults.scss';

function CardSearchResults({ searchTerm }) {
  const cardListState = useSelector((state) => state.cardQueryReducer);

  const renderResultsList = () => {
    // if results exist
    if (cardListState.cardList.length > 0) {
      return cardListState.cardList?.map((card) => (
        <div key={card.id} className="card-search-results__card-container">
          <div className="card-search-results__card">
              <img src={card.image_uris?.small} alt="card" />
              <span className="card-search-results__card-name">{ card.name }</span>
          </div>
        </div>
      ))
    }

    if (searchTerm.length > 0 && searchTerm.length < 3) {
      // let user know more characters needed for request
      return <div>Please enter 3 or more characters</div>
    }

    if (cardListState.error?.errorCode === 404) {
      // if no results and query sent
      return <div>No cards found</div>
    }
  }

  return (
    <div className="card-search-results">
      {
        renderResultsList()
      }
    </div>
  )
}

export default CardSearchResults