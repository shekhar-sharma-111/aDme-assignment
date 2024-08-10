
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
  return (
    <Navbar className="bg-body-tertiary position-sticky">
    <Container className="d-flex  m-1 align-items-center">
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img
          alt=""
          src="https://dummyimage.com/200x200/000/fff&text=Logo"
          width="40"
          height="40"
          className="d-inline-block align-top rounded-circle"
        />
      </Navbar.Brand>
      <div className="flex-grow-1 d-flex justify-content-center">
        <h1 className="m-0">Site Logo</h1>
      </div>
    </Container>
  </Navbar>
  )
}

export default NavBar
