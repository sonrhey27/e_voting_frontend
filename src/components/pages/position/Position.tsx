import { Button, ButtonGroup, Card, Col, Container, Form, Row, Table } from "react-bootstrap"
import { observer } from 'mobx-react-lite';
import PositionListItem from "components/pages/position/PositionListItem";
import { useEffect, useState } from 'react';
import positionStore from "store/PositionStore";
import { IPosition } from "interfaces/IPosition";
import { actions } from 'constants/index';

const PositionListObserver = observer(PositionListItem)

export const Position = () => {
  const [posted, setPosted] = useState<boolean>(false)
  const [positionName, setPositionName] = useState<string>('')
  const [uuid, setUuid] = useState<string>('')
  const [isUpdate, setIsUpdate] = useState<boolean>(false)

  useEffect(() => {
    positionStore.GetPositions()
    setPosted(false)
  }, [posted])  

  const addPosition = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const data: IPosition = {
      name: target.position_name.value,
    }
    if (isUpdate) {
      data.uuid = uuid
      positionStore.PatchPosition(data)
      setIsUpdate(false)
    }

    if (!isUpdate) {
      positionStore.PostPosition(data)
    }

    setPosted(true)
  }

  const handleClick = (e, value: IPosition, action) => {
    if (action === actions.EDIT) {
      setPositionName(value.name)
      setUuid(value.uuid)
      setIsUpdate(true)
    }

    if (action === actions.DELETE) {
      positionStore.DeletePosition(value.uuid)
      setPosted(true)
    }
  }

  const handleChangeInput = (e) => {
    setPositionName(e.target.value)
  }

  return (
    <Container>
      <h1>Position</h1>
      <Row>
        <Col xs={3}>
          <Card>
            <Card.Body>
              <Form onSubmit={addPosition}>
                <Form.Group className="mb-3">
                  <Form.Label>Position Name</Form.Label>
                  <Form.Control type='text' id='position_name' value={positionName} onChange={handleChangeInput}></Form.Control>
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
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <PositionListObserver handleClick={handleClick}/>
          </tbody>
        </Table>
        </Col>
      </Row>
    </Container>
  )
}