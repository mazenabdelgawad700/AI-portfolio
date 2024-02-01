import  Button  from '../Butttons/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home" className='text-white me-4'>GPT-3</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link href="#home" className='text-white me-4 '>Home</Nav.Link>
            <Nav.Link href="#wgptis" className='text-white me-4 '>What is GPT</Nav.Link>
            <Nav.Link href="#features" className='text-white me-4 '>Open AI </Nav.Link>
            <Nav.Link href="#caseSudies" className='text-white me-4 '>Case Studies</Nav.Link>
            <Nav.Link href="#action2" className='text-white me-4 '>Library</Nav.Link>

          </Nav>

          <Button text="Sign In"     />
          <Button text="Sign Up" className="active"/>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;