import { ICandidate } from "interfaces/ICandidate"
import { IPosition } from "interfaces/IPosition"
import { Badge, Button, Card, FormLabel } from "react-bootstrap"
import candidateStore from "store/CandidateStore"
import positionStore from "store/PositionStore"
import voteStore from "store/VoteStore"
import { actions } from 'constants/index';

const VoteListItem = ({handleClick}) => {

  const doneVotingButton = (candidate: ICandidate, position: IPosition) => {
    if (voteStore.status === actions.DONE && voteStore.candidate === candidate.id) {
     return <FormLabel>Voted Successfuly</FormLabel> 
    }
    return <Button variant='success' onClick={e => handleClick(e, candidate.id, position.id)}>Vote Now</Button>
  }

  return (
    <>
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
                  <div className='position-candidate' key={candidate.uuid}>
                    <Card className='mt-3 mb-3 shadow'>
                      <Card.Body>
                        <div className='d-flex'>
                          <div className='justify-content-start w-100'>
                            <h4 className='mb-0'>{
                              candidate.name
                            }</h4>  
                          </div>
                          <div className='align-right justify-content-end w-100'>
                            {
                              doneVotingButton(candidate, position)
                            }
                          </div>
                        </div>
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
    </>
  )
}

export default VoteListItem