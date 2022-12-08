import { Button, ButtonGroup, Card, Col, Container, Form, Row, Table } from "react-bootstrap"
import { observer } from 'mobx-react-lite';
import RegionListItem from "components/pages/region/RegionListItem";
import regionStore from 'store/RegionStore';
import { useEffect, useState } from "react";
import CountrySelectItem from "components/pages/region/CountrySelectItem";
import countryStore from "store/CountryStore";
import { IRegion } from 'interfaces/IRegion';
import { actions } from 'constants/index';

const RegionListObserver = observer(RegionListItem)
const CountrySelectObserver = observer(CountrySelectItem)

export const Region = () => {
  const [posted, setPosted] = useState<boolean>(false)
  const [isUpdate, setIsUpdate] = useState<boolean>(false)
  const [countryId, setCountryId] = useState<number>(0)
  const [regionCode, setRegionCode] = useState<string>('')
  const [regionName, setRegionName] = useState<string>('')
  const [uuid, setUuid] = useState<string>('')

  useEffect(() => {
    countryStore.GetCountries()
  }, [])

  useEffect(() => {
    regionStore.GetRegions()
    setPosted(false)
  }, [posted])

  const addRegion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const data: IRegion = {
      country_id: target.country_id.value,
      name: target.region_name.value,
      code: target.region_code.value
    }

    if (isUpdate) {
      data.uuid = uuid
      regionStore.PatchRegion(data)
      setIsUpdate(false)
    }

    if (!isUpdate) {
      regionStore.PostRegion(data)
    }

    setPosted(true)
  }

  const handleClick = (e, value: IRegion, action) => {
    if (action === actions.EDIT) {
      setUuid(value.uuid)
      setCountryId(value.country_id)
      setRegionCode(value.code)
      setRegionName(value.name)
      setIsUpdate(true)
    }

    if (action === actions.DELETE) {
      regionStore.DeleteRegion(value.uuid)
      setPosted(true)
    }
  }

  const handleCountrySelectChange = (e) => {
    setCountryId(e.target.value)
  }
  
  const handleRegionCodeChange = (e) => {
    setRegionCode(e.target.value)
  }

  const handleRegionNameChange = (e) => {
    setRegionName(e.target.value)
  }

  return (
    <Container>
      <h1>Region</h1>
      <Row>
        <Col xs={3}>
          <Card>
            <Card.Body>
              <Form onSubmit={addRegion}>
                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Select aria-label="Default select example" id='country_id' value={countryId} onChange={handleCountrySelectChange}>
                    <option>Open this select menu</option>
                    <CountrySelectObserver />
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Region Code</Form.Label>
                  <Form.Control type='text' id='region_code' value={regionCode} onChange={handleRegionCodeChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Region Name</Form.Label>
                  <Form.Control type='text' id='region_name' value={regionName} onChange={handleRegionNameChange}></Form.Control>
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
            <RegionListObserver handleClick={handleClick} />
          </tbody>
        </Table>
        </Col>
      </Row>
    </Container>
  )
}