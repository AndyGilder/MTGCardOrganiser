import { useState } from 'react';
import { Button as BsButton } from 'react-bootstrap';
import Button from './Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import CardSearch from './CardSearch';

function Collection() {
    const [state, setState] = useState({
        show: false,
    });

    const handleModalShow = () => setState({ show: true });
    const handleModalClose = () => setState({ show: false });

  return (
    <div>
        <h1>Collection</h1>

        <div>
            <Button buttonText="Add cards" onClick={handleModalShow} />
        </div>

        <Modal show={state.show}>
            <Modal.Header>
                <Modal.Title>Add a Card</Modal.Title>
                <CloseButton variant="white" onClick={handleModalClose}/>
            </Modal.Header>

            <Modal.Body>
                <CardSearch />
            </Modal.Body>

            <Modal.Footer>
                <BsButton variant="secondary" onClick={handleModalClose}>Close</BsButton>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Collection