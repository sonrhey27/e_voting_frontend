import { Button, ButtonGroup, Card, Col, Container, Form, Row, Table } from "react-bootstrap"
import { observer } from 'mobx-react-lite';
import MunicipalityListItem from "components/pages/municipality/MunicipalityListItem";
import { useEffect, useState } from "react";
import municipalityStore from "store/MunicipalityStore";
import RegionSelectItem from "components/pages/municipality/RegionSelectItem";
import regionStore from "store/RegionStore";
import { IMunicipality } from "interfaces/IMunicipality";
import { actions } from 'constants/index';

const RegionListObserver = observer(MunicipalityListItem)
const RegionSelectObserver = observer(RegionSelectItem)

export const Municipality = () => {
  const [posted, setPosted] = useState<boolean>(false)
  const [regionId, setRegionId] = useState<number>(0)
  const [municipalityCode, setMunicipalityCode] = useState<string>('')
  const [municipalityName, setMunicipalityName] = useState<string>('')
  const [uuid, setUuid] = useState<string>('')
  const [isUpdate, setIsUpdate] = useState<boolean>(false)

  useEffect(() => {
    regionStore.GetRegions()
  }, [])

  useEffect(() => {
    municipalityStore.GetMunicipalities()
    setPosted(false)
  }, [posted])

  const addMunicipality = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const data: IMunicipality = {
      region_id: target.municipality_region.value,
      name: target.municipality_name.value,
      code: target.municipality_code.value
    }
    if (isUpdate) {
      data.uuid = uuid
      municipalityStore.PatchMunicipality(data)
      setIsUpdate(false)
    }

    if (!isUpdate) {
      municipalityStore.PostMunicipality(data)
    }

    setPosted(true)
  }

  const handleClick = (e, value: IMunicipality, action) => {
    setUuid(value.uuid)
    if (action === actions.EDIT) {
      setRegionId(value.region_id)
      setMunicipalityCode(value.code)
      setMunicipalityName(value.name)
      setIsUpdate(true)
    }

    if (action === actions.DELETE) {
      municipalityStore.DeleteMunicipality(value.uuid)
      setPosted(true)
    }
  }

  const handleRegionChange = (e) => {
    setRegionId(e.target.value)
  }

  const handleMunicipalityCodeChange = (e) => {
    setMunicipalityCode(e.target.value)
  }

  const handleMunicipalityNameChange = (e) => {
    setMunicipalityName(e.target.value)
  }

  return (
    <Container>
      <h1>Municipality</h1>
      <Row>
        <Col xs={3}>
          <Card>
            <Card.Body>
              <Form onSubmit={addMunicipality}>
                <Form.Group className="mb-3">
                  <Form.Label>Region</Form.Label>
                  <Form.Select aria-label="Default select example" id='municipality_region' value={regionId} onChange={handleRegionChange}>
                    <option>Open this select menu</option>
                    <RegionSelectObserver />
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Municipality Code</Form.Label>
                  <Form.Control type='text' id='municipality_code' value={municipalityCode} onChange={handleMunicipalityCodeChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Municipality Name</Form.Label>
                  <Form.Control type='text' id='municipality_name' value={municipalityName} onChange={handleMunicipalityNameChange}></Form.Control>
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
            <RegionListObserver handleClick={handleClick}/>
          </tbody>
        </Table>
        </Col>
      </Row>
    </Container>
  )
}