import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'

const Navigation = () => (
    <div>
    <Navbar bg="light" expand="sm">
        <div className="container">
            <Navbar.Brand href="/">Pokedex</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
    </div>
)

export default Navigation