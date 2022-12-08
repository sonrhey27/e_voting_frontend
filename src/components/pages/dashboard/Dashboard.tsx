import 'App.css'
import { Badge, Card, Form, Button, Col, Row, Container } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import DashboardListItem from 'components/pages/dashboard/DashboardListItem';
import DashboardSelectItemCountry from './DashboardSelectItemCountry';
import DashboardSelectItemRegion from './DashboardSelectItemRegion';
import DashboardSelectItemMunicipality from './DashboardSelectItemMunicipality';
import { useEffect, useState } from 'react';
import countryStore from 'store/CountryStore';
import regionStore from 'store/RegionStore';
import municipalityStore from 'store/MunicipalityStore';
import positionStore from 'store/PositionStore';
import candidateStore from 'store/CandidateStore';
import voteStore from 'store/VoteStore';
import { IVoteFilter } from 'interfaces/IVote';

const DashboardListObserver = observer(DashboardListItem)
const DashboardSelectItemCountryObserver = observer(DashboardSelectItemCountry)
const DashboardSelectItemRegionObserver = observer(DashboardSelectItemRegion)
const DashboardSelectItemMunicipalityObserver = observer(DashboardSelectItemMunicipality)

export const Dashboard = () => {
  const [posted, setPosted] = useState<boolean>(false)

  useEffect(() => {
    countryStore.GetCountries()
    regionStore.GetRegions()
    municipalityStore.GetMunicipalities()
    positionStore.GetPositions()
    candidateStore.GetCandidates()
    voteStore.VoteCount(null, null, null)
    // setPosted(false)
  }, [])

  const filterVotes = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
//     const data: IVoteFilter = {
//       country_id: target.country_id.value,
//       region_id: target.region_id.value,
//       municipality_id: target.municipality_id.value
//     }
// console.log(data)
    const countryId = target.country_id.value === '0' ? null : target.country_id.value
    const regionId = target.region_id.value === '0' ? null : target.region_id.value
    const municipalityId = target.municipality_id.value === '0' ? null : target.municipality_id.value
    // console.log(countryId)
    voteStore.VoteCount(countryId, regionId, municipalityId)
    // setPosted(true)
  }

  return (
    <Container>
      <Row className='gx-5 h-row-custom'>
        <Col xs={3}>
          <Card>
            <Form onSubmit={filterVotes}>
              <Card.Body>
                <Form.Group className='mb-3'>
                  <Form.Label>Country</Form.Label>
                  <Form.Select aria-label="Default select example" id='country_id'>
                    <option value='0'>Open this select menu</option>
                    <DashboardSelectItemCountryObserver />
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Region</Form.Label>
                  <Form.Select aria-label="Default select example" id='region_id'>
                    <option value='0'>Open this select menu</option>
                    <DashboardSelectItemRegionObserver />
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Municipality</Form.Label>
                  <Form.Select aria-label="Default select example" id='municipality_id'>
                    <option value='0'>Open this select menu</option>
                    <DashboardSelectItemMunicipalityObserver />
                  </Form.Select>
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" className='btn-block' type="submit">
                    Submit
                  </Button>
                </div>
              </Card.Body>
            </Form>
          </Card>
        </Col>
        <Col className='h-col-custom'>
        <Row className='h-custom'>
          <Col className='h-col-custom'>
            <Card className='h-col-custom'>
              <Card.Body className='h-col-custom'>
                <div className='voting-results'>
                  <DashboardListObserver />
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
