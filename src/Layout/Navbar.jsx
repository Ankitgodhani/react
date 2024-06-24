import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function ColorSchemesExample() {
  return (
    <>
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container> 
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='text-1000 nav-link'>product</Link>
            <Link to="/celendar" className='text-1000 nav-link'>celendar</Link>
            <Link to="/chart" className='text-1000 nav-link'>chart</Link>
            {/* <Link to="/" className="nav-item nav-link active" >product</Link> */}
          </Nav>
        </Container>  
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;