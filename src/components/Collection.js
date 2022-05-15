import { useState } from 'react';
import { Button as BsButton } from 'react-bootstrap';
import { useSelector } from "react-redux"
import Button from './Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import CardSearch from './CardSearch';
import CollectionTable from './CollectionTable';
import CardDetails from './CardDetails';

function Collection() {
  const cardCollectionState = useSelector((state) => state.cardCollectionReducer);
  const [state, setState] = useState({
    show: false,
  });

  const handleModalShow = () => setState({ show: true });
  const handleModalClose = () => setState({ show: false });

  const saveCardChoice = (keepModalOpen = false) => {
    // TODO: Pass to database then return values in CollectionTable.js
    // Clear modal form and empty cardCollectionState

    if(!keepModalOpen) {
      handleModalClose();
    }
  }

  return (
      <div>
        <h1>Collection</h1>

        <div>
          <Button buttonText="Add cards" onClick={handleModalShow} />
        </div>

        <div>
          {/* Table of cards that updates when a new one is added */}
          {/* Later CRUD to be added to table */}
          <CollectionTable />
        </div>

        {/* Modals */}
        <Modal
          show={state.show}
          size="lg"
        >
          <Modal.Header>
            <Modal.Title>Add a Card</Modal.Title>
            <CloseButton variant="white" onClick={handleModalClose}/>
          </Modal.Header>

          <Modal.Body>
            <CardSearch />

            {
              cardCollectionState.card &&
              <CardDetails />
            }
          </Modal.Body>

          <Modal.Footer>
            <BsButton variant="primary" onClick={() => saveCardChoice(true)}>Save &amp; Add Another</BsButton>
            <BsButton variant="secondary" onClick={() => saveCardChoice(false)}>Save &amp; Close</BsButton>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Collection