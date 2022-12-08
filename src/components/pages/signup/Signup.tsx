import 'App.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import SignUpContrySelectItem from 'components/pages/signup/SignUpCountrySelectItem'
import SignUpRegionSelectItem from 'components/pages/signup/SignUpRegionSelectItem'
import SignUpMunicipalityItem from 'components/pages/signup/SignUpMunicipalitySelectItem'
import { useEffect } from 'react'
import countryStore from 'store/CountryStore'
import regionStore from 'store/RegionStore'
import municipalityStore from 'store/MunicipalityStore'
import UserStore from 'store/UserStore'
import { IUser } from 'interfaces/IUser'

const CountrySelectObserver = observer(SignUpContrySelectItem)
const RegionSelectObserver = observer(SignUpRegionSelectItem)
const MunicipalitySelectObserver = observer(SignUpMunicipalityItem)

export const Signup = () => {
  
  const userStore = UserStore()

  useEffect(() => {
    countryStore.GetCountries()
    regionStore.GetRegions()
    municipalityStore.GetMunicipalities()
  }, [])


  const addUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const data: IUser = {
      name: target.full_name.value,
      email_adress: target.email_address.value,
      country_id: target.country_id.value,
      region_id: target.region_id.value,
      municipality_id: target.municipality_id.value,
      password: target.password.value
    }
    userStore.signUp(data)
  }

  return (
    <Container>
      <div className='main-wrapper'>
        <div className='sub-wrapper'>
          <Card className='w-50 m-auto p-3'>
            <Card.Body>
              <Card.Title>Signup for an account</Card.Title>
              <hr />
              <Form onSubmit={addUser}>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" id='full_name' />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" id='email_address' />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Select aria-label="Default select example" id='country_id'>
                    <option>Open this select menu</option>
                    <CountrySelectObserver />
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Region</Form.Label>
                  <Form.Select aria-label="Default select example" id='region_id'>
                    <option>Open this select menu</option>
                    <RegionSelectObserver />
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Municipality</Form.Label>
                  <Form.Select aria-label="Default select example" id='municipality_id'>
                    <option>Open this select menu</option>
                    <MunicipalitySelectObserver />
                  </Form.Select>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" id='password' />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" id='confirm_password' />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    Signup
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
