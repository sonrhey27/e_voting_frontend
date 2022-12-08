import 'App.css'
import VoteListItem from 'components/pages/vote/VoteListItem'
import { Container, Card, Button, Badge } from "react-bootstrap"
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import positionStore from 'store/PositionStore';
import candidateStore from 'store/CandidateStore';
import voteStore from 'store/VoteStore';
import { IVote } from 'interfaces/IVote';
import { actions } from 'constants/index';

const VoteListItemObserver = observer(VoteListItem)

export const Vote = () => {

  useEffect(() => {
    positionStore.GetPositions()
    candidateStore.GetCandidates()
  }, [])

  const handleClick = (e, candidateId, positionId) => {
    const data: IVote = {
      candidate_id: candidateId,
      country_id: actions.COUNTRY_ID,
      region_id: actions.REGION_ID,
      municipality_id: actions.MUNICIPALITY_ID,
      user_id: actions.USER_ID,
      position_id: positionId,
      vote: 1
    }

    voteStore.PostVote(data)
  }

  return (
    <Container>
      <h1>Vote</h1>
      <div className='voting-area'>
        <Card className='h-col-custom'>
          <Card.Body className='h-col-custom'>
            <div className='voting-section'>
              <div className='position'>
                <VoteListItemObserver handleClick={handleClick}/>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}