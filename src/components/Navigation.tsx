import { NavDropdown } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { actions } from 'constants/index';

export const Navigation = () => {
  const handleLogout = () => {
    localStorage.removeItem('login')
    location.replace('/')
  }

  const checkUserLogin = () => {
    if (localStorage.getItem('login') === null) {
      return (
        <>
          <a href='/login' className='nav-link'>
            Login
          </a>
          <a href='/signup' className='nav-link'>
            Signup
          </a>
        </>
      )
    }

    if (actions.USER_TYPE === actions.USER) {
      return (
        <>
          <a href='#' onClick={handleLogout} className='nav-link'>
            Logout
          </a>
          <Link to='/vote' className='nav-link'>
            Vote
          </Link>
        </>
      )
    }

    if (actions.USER_TYPE === actions.ADMIN) {
      return (
        <>
          <a href='#' onClick={handleLogout} className='nav-link'>
            Logout
          </a>
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
        </>
      )
    }
  }

  return (
    <Navbar bg='primary' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>E-Voting</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='justify-content-end'>
          <Nav className='gap-4'>
            {
              checkUserLogin()
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
