import { Button, ButtonGroup, Card, Col, Container, Form, Row, Table } from "react-bootstrap"
import { observer } from 'mobx-react-lite';
import CandidateListItem from "components/pages/candidate/CandidateListItem";
import candidateStore from "store/CandidateStore";
import { useEffect, useState } from "react";
import PositionSelectItem from "components/pages/candidate/PositionSelectItem";
import positionStore from "store/PositionStore";
import { ICandidate } from "interfaces/ICandidate";
import { actions } from 'constants/index';

const CandidateListObserver = observer(CandidateListItem)
const PositionListObserver = observer(PositionSelectItem)

export const Candidate = () => {
  const [posted, setPosted] = useState<boolean>(false)
  const [positionId, setSelectedPositionId] = useState<number>(0)
  const [candidateName, setSelectedCandidate] = useState<string>('')
  const [isUpdate, setIsUpdate] = useState<boolean>(false)
  const [uuid, setUuid] = useState<string>('')

  useEffect(() => {
    candidateStore.GetCandidates()
    setPosted(false)
  }, [posted])

  useEffect(() => {
    positionStore.GetPositions()
  }, [])

  const handleClick = (e, value: ICandidate, action) => {
    if (action === actions.EDIT) {
      setSelectedPositionId(value.position_id)
      setSelectedCandidate(value.name)
      setUuid(value.uuid)
      setIsUpdate(true)
    }

    if (action === actions.DELETE) {
      candidateStore.DeleteCandidate(value.uuid)
      setPosted(true)
    }
  }

  const addCandidate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const data: ICandidate = {
      position_id: target.position_id.value,
      name: target.candidate_name.value,
    }

    if (isUpdate) {
      data.uuid = uuid
      candidateStore.PatchCandidate(data)
      setIsUpdate(false)
    }

    if (!isUpdate) {
      candidateStore.PostCandidate(data)
    }

    setPosted(true)
  }

  const handleChangeSelect = (e) => {
    setSelectedPositionId(e.target.value)
  }

  const handleChangeInput = (e) => {
    setSelectedCandidate(e.target.value)
  }

  return (
    <Container>
      <h1>Candidate</h1>
      <Row>
        <Col xs={3}>
          <Card>
            <Card.Body>
              <Form onSubmit={addCandidate}>
                <Form.Group className="mb-3">
                  <Form.Label>Position</Form.Label>
                  <Form.Select aria-label="Default select example" id='position_id' value={positionId} onChange={handleChangeSelect}>
                    <option>Open this select menu</option>
                    <PositionListObserver />
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Candidate Name</Form.Label>
                  <Form.Control type='text' id='candidate_name' value={candidateName} onChange={handleChangeInput}></Form.Control>
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" className='btn-block' type="submit">
                    Submit
                  </Button>
                </div>`
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Position</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <CandidateListObserver handleClick={handleClick} />
          </tbody>
        </Table>
        </Col>
      </Row>
    </Container>
  )
}