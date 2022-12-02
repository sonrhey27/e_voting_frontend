import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap"
import CountryListItem from "./CountryListItem";
import countryStore from 'store/CountryStore';
import { observer } from 'mobx-react-lite';
import { ICountry } from "./Interfaces/ICountry";
import { useEffect } from 'react';
import { useState } from 'react';

const CountryListObserver = observer(CountryListItem)

const Country = () => {
  const [posted, setPosted] = useState<boolean>(false)

  useEffect(() => {
    countryStore.GetCountries()
    setPosted(false)
  }, [posted])

  const addCountry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const data: ICountry = {
      name: target.country_code.value,
      code: target.country_name.value
    }
    countryStore.PostCountries(data)
    setPosted(true)
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
                  <Form.Control type='text' id='country_code'></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Country Name</Form.Label>
                  <Form.Control type='text' id='country_name'></Form.Control>
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
            <CountryListObserver />
          </tbody>
        </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Country