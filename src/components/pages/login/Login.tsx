import 'App.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { IUser } from 'interfaces/IUser';
import UserStore from 'store/UserStore';

export const Login = () => {
  const userStore = UserStore()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const data: IUser = {
      email_adress: target.email_address.value,
      password: target.password.value
    }
    userStore.login(data)
  }

  return (
    <Container>
      <div className='main-wrapper'>
        <div className='sub-wrapper'>
          <Card className='w-25 m-auto p-3'>
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <hr />
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" id='email_address' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" id='password' placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  )
}
