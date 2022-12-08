import { ICandidate } from "interfaces/ICandidate"
import { IPosition } from "interfaces/IPosition"
import { Badge, Card } from "react-bootstrap"
import candidateStore from "store/CandidateStore"
import positionStore from "store/PositionStore"
import voteStore from "store/VoteStore"

const DashboardListItem = () => {
  return (
    <>
      <div className='position'>
        {
          positionStore.positionList.map((position: IPosition) => {
            return (
              <div className='position-name' key={position.id}>
                <label className='h4 mb-0'>
                  <Badge bg='danger'>{position.name}</Badge>
                </label>
                <hr />
                {
                  candidateStore.candidateList.filter(q => q.position_id === position.id).map((candidate: ICandidate) => {
                    return (
                      <div className='position-candidates' key={candidate.id}>
                        <Card className='mt-3 mb-3 shadow'>
                          <Card.Body>
                            <h4 className='mb-0'>{candidate.name}</h4>
                            <Badge bg='warning'>{voteStore.voteCount[candidate.id] || 0} votes garnered</Badge>
                          </Card.Body>
                        </Card>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default DashboardListItem