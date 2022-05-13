import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCardList, fetchCardDetails } from "../actions";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

function CardSearch({ onModalChange }) {
  const cardListState = useSelector((state) => state.cardQueryReducer);
  const dispatch = useDispatch();

  const searchCards = (query) => {
    dispatch(fetchCardList(query));
  }

  const cardClicked = (cards) => {
    cards.forEach((card) => {
      console.log(card);
      dispatch(fetchCardDetails(card));
    });
    // Keep modal open for now - possibly close on "save" into collection
    // handleModalChanged(false);
  }

  const handleModalChanged = (show) => {
    onModalChange(show);
  }

  const filterBy = () => true;

  return (
    <>
      {
        <AsyncTypeahead
          id="cardSearch"
          onSearch={searchCards}
          isLoading={cardListState.loading}
          labelKey="name"
          minLength={3}
          options={cardListState.cardList}
          placeholder="Search for a card..."
          filterBy={filterBy}
          onChange={cardClicked}
          renderMenuItemChildren={(option, props) => (
            <Fragment>
              <img
                alt={option.name}
                src={option.image_uris?.small}
              />
              <span>{option.name}</span>
            </Fragment>
          )}
        />
      }
    </>
  )
}

export default CardSearch