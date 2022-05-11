import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

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
            <button onClick={handleModalShow}>Add cards</button>
        </div>

        <Modal show={state.show}>
            <Modal.Header>
                <Modal.Title>Modal Title</Modal.Title>
                <CloseButton onClick={handleModalClose}/>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Collection