import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


function Navigation() {

    return (

        <>
            <Navbar bg="warning" variant="warning" className=''>
                <Container>
                <Nav className="me-auto">
                    <a className="navbar-brand" href="/">
                        <img src="https://media.istockphoto.com/id/1748196744/photo/cute-turkey-character-3d-render-3d-rendered-cartoon-illustration.webp?b=1&s=170667a&w=0&k=20&c=RO25uH0hcugv9O1fsEGyRLfIUeZTWx4-ItPpjrCvP58=" width="30" height="30" className="d-inline-block align-top" alt=""/>
                        Gobble Stop
                    </a>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/products" className="nav-link">Products</Link>
                    <Link to="/new" className="nav-link">Create</Link>
                </Nav>
                </Container>
                </Navbar>
        </>
    )
} 

export default Navigation


