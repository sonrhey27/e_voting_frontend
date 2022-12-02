import { Button, ButtonGroup, Card, Col, Container, Form, Row, Table } from "react-bootstrap"

export const Position = () => {
  return (
    <Container>
      <h1>Position</h1>
      <Row>
        <Col xs={3}>
          <Card>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Position Name</Form.Label>
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
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
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