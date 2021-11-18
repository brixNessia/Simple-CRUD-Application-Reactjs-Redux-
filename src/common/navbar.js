import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function NavBar(props) {
  const { children } = props
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        Sample Crud
      </Container>
    </Navbar>
    { children }
    </>
  )
}
export default NavBar