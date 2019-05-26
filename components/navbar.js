import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'

const Navigation = () => (
    <div className="navigation">
    <Navbar expand="sm">
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

    <style jsx global>{`
        .navigation{
            background-color: red;
            color: white;
            margin-bottom: 1.5em;
        }
        a{
            color: white !important;
        }
        a:active{
            color: black !important;
        }
        a:focus{
            outline: none;
            border-bottom: 5px solid black;
        }
    `}</style>

    </div>
);

export default Navigation;