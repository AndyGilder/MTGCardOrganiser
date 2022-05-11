import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCardListByName } from "../actions";
import CardSearchResults from "./CardSearchResults";
import LoadingSpinner from './LoadingSpinner';

function CardSearch() {
  const cardListState = useSelector((state) => state.cardQueryReducer);
  const dispatch = useDispatch();

  const [state, setState] = useState({
      searchTerm: '',
  });

  useEffect(() => {
    const delayDataGet = setTimeout(() => {
      dispatch(fetchCardListByName(state.searchTerm));
    }, 1000);

    return () => clearTimeout(delayDataGet);
  }, [dispatch, state.searchTerm])

  const handleKeyUp = (event) => {
    setState({ searchTerm: event.target.value })
  }

  const renderLoading = () => {

    return (
      <>
        { cardListState.loading && <LoadingSpinner /> }

        <input type="text" placeholder="Search for a card..." onKeyUp={handleKeyUp}/>

        <CardSearchResults searchTerm={state.searchTerm} />
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