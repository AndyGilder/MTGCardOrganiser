import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { fetchCardListByName } from "../actions";
import CardSearchResults from "./CardSearchResults";
import './CardSearch.scss';

function CardSearch() {
  // const cardListState = useSelector((state) => state.cardQueryReducer);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    searchTerm: '',
    resultsOpen: false,
  });

  useEffect(() => {
    const delayDataGet = setTimeout(() => {
      dispatch(fetchCardListByName(state.searchTerm));
    }, 1000);

    return () => clearTimeout(delayDataGet);
  }, [dispatch, state.searchTerm])

  const handleKeyUp = (event) => {
    setState({ searchTerm: event.target.value, resultsOpen: true })
  }

  const renderLoading = () => {

    return (
      <>
        <div className="search-form-container">
          <input type="text" placeholder="Search for a card..." className="card-search-input" onKeyUp={handleKeyUp}/>

          <CardSearchResults searchTerm={state.searchTerm} resultsOpen={state.resultsOpen} />
        </div>
      </>
    )
  }

  return (
    <>
      {
        renderLoading()
      }
    </>
  )
}

export default CardSearch