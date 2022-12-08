import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap"
import CountryListItem from "./CountryListItem";
import countryStore from 'store/CountryStore';
import { observer } from 'mobx-react-lite';
import { ICountry } from "interfaces/ICountry";
import { useEffect } from 'react';
import { useState } from 'react';
import { actions } from 'constants/index';

const CountryListObserver = observer(CountryListItem)

const Country = () => {
  const [posted, setPosted] = useState<boolean>(false)
  const [isUpdate, setIsUpdate] = useState<boolean>(false)
  const [countryCode, setCountryCode] = useState<string>('')
  const [countryName, setCountryName] = useState<string>('')
  const [uuid, setUuid] = useState<string>('')

  useEffect(() => {
    countryStore.GetCountries()
    setPosted(false)
  }, [posted])

  const addCountry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const data: ICountry = {
      name: target.country_name.value,
      code: target.country_code.value
    }

    if (isUpdate) {
      data.uuid = uuid
      countryStore.PatchCountry(data)
      setIsUpdate(false)
    }

    if (!isUpdate) {
      countryStore.PostCountry(data)
    }

    setPosted(true)
  }

  const handleClick = (e, value: ICountry, action) => {
    if (action === actions.EDIT) {
      setUuid(value.uuid)
      setCountryCode(value.code)
      setCountryName(value.name)
      setIsUpdate(true)
    }

    if (action === actions.DELETE) {
      countryStore.DeleteCountry(value.uuid)
      setPosted(true)
    }
  }

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value)
  }

  const handleCountryNameChange = (e) => {
    setCountryName(e.target.value)
  }

  return (
    <Container>
      <h1>Country</h1>
      <Row>
        <Col xs={3}>
          <Card>
            <Card.Body>
              <Form onSubmit={addCountry}>
                <Form.Group className="mb-3">
                  <Form.Label>Country Code</Form.Label>
                  <Form.Control type='text' id='country_code' value={countryCode} onChange={handleCountryCodeChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Country Name</Form.Label>
                  <Form.Control type='text' id='country_name' value={countryName} onChange={handleCountryNameChange}></Form.Control>
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" className='btn-block' type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Code</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <CountryListObserver handleClick={handleClick}/>
          </tbody>
        </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Country