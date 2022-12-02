import { NavDropdown } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <Navbar bg='primary' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>E-Voting</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='justify-content-end'>
          <Nav className='gap-4'>
            <Link to='/login' className='nav-link'>
              Login
            </Link>
            <Link to='/signup' className='nav-link'>
              Signup
            </Link>
            <Link to='/vote' className='nav-link'>
              Vote
            </Link>
            <NavDropdown title='Maintenance' id='basic-nav-dropdown'>
              <Link to='/country' className='dropdown-item'>
                Country
              </Link>
              <Link to='/region' className='dropdown-item'>
                Region
              </Link>
              <Link to='/municipality' className='dropdown-item'>
                Municipality
              </Link>
              <Link to='/position' className='dropdown-item'>
                Position
              </Link>
              <Link to='/candidate' className='dropdown-item'>
                Candidates
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
