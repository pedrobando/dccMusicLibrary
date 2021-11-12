import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class EditSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false,
            setShow: false,
            id: 0
         }
    }
    
    render() { 
        return ( 
            <>
            <Button variant="primary" onClick={() => this.setState({ setShow: true, id: this.props.key})}>
              Launch demo modal
            </Button>
      
            <Modal show={this.show} onHide={() => this.setState({ setShow: false })}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => this.setState({ setShow: false })}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => this.setState({ setShow: false })}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

            
          </>
         );
    }
}
 
export default EditSong;