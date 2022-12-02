import { Button, ButtonGroup, Card, Col, Container, Form, Row, Table } from "react-bootstrap"

export const Region = () => {
  return (
    <Container>
      <h1>Region</h1>
      <Row>
        <Col xs={3}>
          <Card>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Region Code</Form.Label>
                <Form.Control type='text'></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Region Name</Form.Label>
                <Form.Control type='text'></Form.Control>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" className='btn-block' type="submit">
                  Submit
                </Button>
              </div>
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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>@mdo</td>
              <td>
                <ButtonGroup>
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>@fat</td>
              <td>
                <ButtonGroup>
                  <Button variant="primary">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        </Table>
        </Col>
      </Row>
    </Container>
  )
}