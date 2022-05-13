import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCardList, fetchCardDetails } from "../actions";
import './CardSearch.scss';

function CardSearch({ onModalChange }) {
  const cardListState = useSelector((state) => state.cardQueryReducer);
  const dispatch = useDispatch();
  const resultListRef = useRef(null);
  const searchInputRef = useRef(null);

  const [state, setState] = useState({
    searchTerm: '',
    resultListOpen: false,
  });

  useEffect(() => {
    let mousedownHandler = (event) => {
      if (!resultListRef.current.contains(event.target) && !searchInputRef.current.contains(event.target)) {
        setState({
          searchTerm: state.searchTerm,
          resultListOpen: false,
        });
      }

      if (searchInputRef.current.contains(event.target) && state.searchTerm?.length > 0) {
        setState({
          searchTerm: state.searchTerm,
          resultListOpen: true,
        });
      }
    }

    document.addEventListener('mousedown', mousedownHandler);

    const delayDataGet = setTimeout(() => {
      dispatch(fetchCardList(state.searchTerm));
    }, 1000);

    return () => {
      document.removeEventListener('mousedown', mousedownHandler);
      clearTimeout(delayDataGet);
    }
  }, [dispatch, state.searchTerm])

  // Handlers
  const handleKeyUp = (event) => {
    setState({
      searchTerm: event.target.value,
      resultListOpen: true,
    });
  }

  const cardClicked = (card) => {
    dispatch(fetchCardDetails(card));
    setState({
      searchTerm: state.searchTerm,
      resultListOpen: false,
    });

    // Keep modal open for now - possibly close on "save" into collection
    // handleModalChanged(false);
  }

  const handleModalChanged = (show) => {
    onModalChange(show);
  }

  const renderResultsList = () => {
    // if results exist
    if (cardListState.cardList.length > 0 && state.resultListOpen) {
      return cardListState.cardList?.map((card) => (
        <div key={card.id} className="card-search-results__card-container" onClick={() => {cardClicked(card)}}>
          <div className="card-search-results__card">
              <img src={card.image_uris?.small} alt="card" />
              <span className="card-search-results__card-name">{ card.name }</span>
          </div>
        </div>
      ))
    }

    if (state.searchTerm?.length > 0 && state.searchTerm?.length < 3) {
      // let user know more characters needed for request
      return <div>Please enter 3 or more characters</div>
    }

    if (cardListState.error?.errorCode === 404) {
      // if no results and query sent
      return <div>No cards found</div>
    }
  }

  return (
    <>
      {
        <div className="search-form-container">
          <input type="text" placeholder="Search for a card..." className="card-search-input" onKeyUp={handleKeyUp} ref={searchInputRef}/>

          <div className="card-search-results" ref={resultListRef}>
            { renderResultsList() }
          </div>
        </div>
      }
    </>
  )
}

export default CardSearch