import React from 'react';
import { Popover, Button, Tooltip, Modal, 
FormGroup, Form, ControlLabel, FormControl, Col  } from 'react-bootstrap';

class Messages extends React.Component {
     constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


    render() {
         const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;


      return (
          <div>
              <div>
                  <h3 className="text-center"> Messages </h3>
                  <hr/>
                  </div>
               <div>
        <Button className="right" bsStyle="primary" bsSize="large" onClick={  this.handleShow}>
New Message
        </Button>

        <Modal show={  this.state.show}   onHide={  this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Compose</Modal.Title>
          </Modal.Header>
          <Modal.Body>
<Form horizontal>
  <FormGroup controlId="formHorizontalRecipient">
    <Col componentClass={ControlLabel}   sm={2}>
Recipient
    </Col>
    <Col sm={10}>
      <FormControl type="recipient" placeholder="Recipient" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalSubject">
    <Col componentClass={ControlLabel}   sm={2}>
Subject
    </Col>
    <Col sm={10}>
      <FormControl type="subject" placeholder="Subject" />
    </Col>
  </FormGroup>


  <FormGroup controlId="formHorizontalMessage">
    <Col componentClass={ControlLabel}   sm={2}>
Message
    </Col>
    <Col sm={10}>
      <FormControl componentClass="textarea" placeholder="Message" />
    </Col>
  </FormGroup>
 

  <FormGroup>
    <Col smOffset={2}   sm={10}>
      <Button type="submit">Send</Button>
    </Col>
  </FormGroup>

</Form>;

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={  this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
<hr/>
<p>This is where you can message properties you have followed or booked from directly.
Start a conversation to learn more about the space, 
confirm your tour date or share special requirements.</p>

              </div>
    );
  }
}

export default Messages;
