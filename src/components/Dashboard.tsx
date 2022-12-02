import 'App.css'
import { Badge, Card, Form, Button, Col, Row, Container } from 'react-bootstrap'

export const Dashboard = () => {
  return (
    <Container>
      <Row className='gx-5 h-row-custom'>
        <Col xs={3}>
          <Card>
            <Card.Body>
              <Form.Group className='mb-3'>
                <Form.Label>Country</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Region</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Municipality</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" className='btn-block' type="submit">
                  Submit
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className='h-col-custom'>
        <Row className='h-custom'>
          <Col className='h-col-custom'>
            <Card className='h-col-custom'>
              <Card.Body className='h-col-custom'>
                <div className='voting-results'>
                  <div className='position'>
                    <div className='position-name'>
                      <label className='h4 mb-0'>
                        <Badge bg='danger'>President</Badge>
                      </label>
                      <hr />
                    </div>
                    <div className='position-candidates'>
                      <Card className='mt-3 mb-3 shadow'>
                        <Card.Body>
                          <h4 className='mb-0'>Lorem Ipsum </h4>
                          <Badge bg='warning'>2,000,343,200 total votes</Badge>
                        </Card.Body>
                      </Card>
                      <Card className='mb-3 shadow'>
                        <Card.Body>
                          <h4>Lorem Ipsum </h4>
                          <Badge bg='warning'>2,000,343,200 total votes</Badge>
                        </Card.Body>
                      </Card>
                      <Card className='mb-3 shadow'>
                        <Card.Body>
                          <h4>Lorem Ipsum </h4>
                          <Badge bg='warning'>2,000,343,200 total votes</Badge>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                  <div className='position'>
                    <div className='position-name'>
                      <label className='h4 mb-0'>
                        <Badge bg='danger'>Vice President</Badge>
                      </label>
                      <hr />
                    </div>
                    <div className='position-candidates'>
                      <Card className='mt-3 mb-3 shadow'>
                        <Card.Body>
                          <h4>Lorem Ipsum </h4>
                          <Badge bg='warning'>2,000,343,200 total votes</Badge>
                        </Card.Body>
                      </Card>
                      <Card className='mb-3 shadow'>
                        <Card.Body>
                          <h4>Lorem Ipsum </h4>
                          <Badge bg='warning'>2,000,343,200 total votes</Badge>
                        </Card.Body>
                      </Card>
                      <Card className='mb-3 shadow'>
                        <Card.Body>
                          <h4>Lorem Ipsum </h4>
                          <Badge bg='warning'>2,000,343,200 total votes</Badge>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                  <div className='position'>
                    <div className='position-name'>
                      <label className='h4 mb-0'>
                        <Badge bg='danger'>Senator</Badge>
                      </label>
                      <hr />
                    </div>
                    <div className='position-candidates'>
                      <Card className='mt-3 mb-3 shadow'>
                        <Card.Body>
                          <h4>Lorem Ipsum </h4>
                          <Badge bg='warning'>2,000,343,200 total votes</Badge>
                        </Card.Body>
                      </Card>
                      <Card className='mb-3 shadow'>
                        <Card.Body>
                          <h4>Lorem Ipsum </h4>
                          <Badge bg='warning'>2,000,343,200 total votes</Badge>
                        </Card.Body>
                      </Card>
                      <Card className='mb-3 shadow'>
                        <Card.Body>
                          <h4>Lorem Ipsum </h4>
                          <Badge bg='warning'>2,000,343,200 total votes</Badge>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Col>
      </Row>
    </Container>
  )
}
