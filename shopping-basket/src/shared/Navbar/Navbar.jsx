import React , { useContext } from 'react'
import { CartContext } from '../../context/CartContextProvider'
import shop from "../../assets/icons/shop.svg"
import { Link } from "react-router-dom"
import { Badge , Container , Nav , Navbar , NavDropdown} from "react-bootstrap"
//import scss file
import "./Navbar.scss"

const MainNavbar = () => {
    const {state}=useContext(CartContext)
    console.log(state.ItemCounter)
    console.log(state.selectedItems.length)
    return (
        <Navbar className='customNavbar' expand="lg">
          <Container>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link"><Link to="/products">Products</Link></Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
 
            </Navbar.Collapse>
            <Navbar.Brand>
              <Link to="/carts">
                <div>
                <img src={shop} alt="shop" />
                <Badge bg="info">
                <span>{state.itemCounter}</span>
                  
                </Badge>
                </div>
              </Link>

            </Navbar.Brand>
          </Container>
        </Navbar>
      );
    }

export default MainNavbar

