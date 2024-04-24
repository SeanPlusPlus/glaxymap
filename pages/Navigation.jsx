import { useState } from "react"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

import Info from "./Info"

function Navigation() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const InfoModal = (
    <Modal show={show} onHide={handleClose} size="lg">
      <Info />
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )

  const infoEnabled = false

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Galaxy Map</Navbar.Brand>
          {infoEnabled && (
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Button onClick={handleShow} variant="info">
                  Info
                </Button>
              </Navbar.Text>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
      {InfoModal}
    </>
  )
}

export default Navigation
