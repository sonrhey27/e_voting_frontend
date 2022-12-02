import 'App.css'
import { Container, Card, Button, Badge } from "react-bootstrap"

export const Vote = () => {
  return (
    <Container>
      <h1>Vote</h1>
      <div className='voting-area'>
        <Card className='h-col-custom'>
          <Card.Body className='h-col-custom'>
            <div className='voting-section'>
              <div className='position'>
                <div className='position-name'>
                  <label className='h4 mb-0'>
                    <Badge bg='danger'>President</Badge>
                  </label>
                  <hr />
                </div>
                <div className='position-candidate'>
                  <Card className='mt-3 mb-3 shadow'>
                    <Card.Body>
                      <div className='d-flex'>
                        <div className='justify-content-start w-100'>
                          <h4 className='mb-0'>Lorem Ipsum </h4>  
                        </div>
                        <div className='align-right justify-content-end w-100'>
                          <Button variant='success'>Vote Now</Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className='mt-3 mb-3 shadow'>
                    <Card.Body>
                      <div className='d-flex'>
                        <div className='justify-content-start w-100'>
                          <h4 className='mb-0'>Lorem Ipsum </h4>  
                        </div>
                        <div className='align-right justify-content-end w-100'>
                          <Button variant='success'>Vote Now</Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className='mt-3 mb-3 shadow'>
                    <Card.Body>
                      <div className='d-flex'>
                        <div className='justify-content-start w-100'>
                          <h4 className='mb-0'>Lorem Ipsum </h4>  
                        </div>
                        <div className='align-right justify-content-end w-100'>
                          <Button variant='success'>Vote Now</Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className='mt-3 mb-3 shadow'>
                    <Card.Body>
                      <div className='d-flex'>
                        <div className='justify-content-start w-100'>
                          <h4 className='mb-0'>Lorem Ipsum </h4>  
                        </div>
                        <div className='align-right justify-content-end w-100'>
                          <Button variant='success'>Vote Now</Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>

                <div className='position-name'>
                  <label className='h4 mb-0'>
                    <Badge bg='danger'>Vice President</Badge>
                  </label>
                  <hr />
                </div>
                <div className='position-candidate'>
                  <Card className='mt-3 mb-3 shadow'>
                    <Card.Body>
                      <div className='d-flex'>
                        <div className='justify-content-start w-100'>
                          <h4 className='mb-0'>Lorem Ipsum </h4>  
                        </div>
                        <div className='align-right justify-content-end w-100'>
                          <Button variant='success'>Vote Now</Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className='mt-3 mb-3 shadow'>
                    <Card.Body>
                      <div className='d-flex'>
                        <div className='justify-content-start w-100'>
                          <h4 className='mb-0'>Lorem Ipsum </h4>  
                        </div>
                        <div className='align-right justify-content-end w-100'>
                          <Button variant='success'>Vote Now</Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className='mt-3 mb-3 shadow'>
                    <Card.Body>
                      <div className='d-flex'>
                        <div className='justify-content-start w-100'>
                          <h4 className='mb-0'>Lorem Ipsum </h4>  
                        </div>
                        <div className='align-right justify-content-end w-100'>
                          <Button variant='success'>Vote Now</Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className='mt-3 mb-3 shadow'>
                    <Card.Body>
                      <div className='d-flex'>
                        <div className='justify-content-start w-100'>
                          <h4 className='mb-0'>Lorem Ipsum </h4>  
                        </div>
                        <div className='align-right justify-content-end w-100'>
                          <Button variant='success'>Vote Now</Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}