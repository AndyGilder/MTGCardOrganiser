import { useState } from 'react';
import { Button as BsButton } from 'react-bootstrap';
import Button from './Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import CardSearch from './CardSearch';
import CollectionTable from './CollectionTable';

function Collection() {
    const [state, setState] = useState({
        show: false,
    });

    const handleModalShow = () => setState({ show: true });
    const handleModalClose = () => setState({ show: false });

    const handleModalChanged = (show) => {
        setState({
            show,
        });
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
        <Modal show={state.show}>
            <Modal.Header>
                <Modal.Title>Add a Card</Modal.Title>
                <CloseButton variant="white" onClick={handleModalClose}/>
            </Modal.Header>

            <Modal.Body>
                <CardSearch onModalChange={handleModalChanged} />
            </Modal.Body>

            <Modal.Footer>
                <BsButton variant="secondary" onClick={handleModalClose}>Close</BsButton>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Collection