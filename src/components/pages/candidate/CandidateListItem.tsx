import { ICandidate } from "interfaces/ICandidate"
import { Button, ButtonGroup } from "react-bootstrap"
import candidateStore from "store/CandidateStore"
import { actions } from 'constants/index';

const CandidateListItem = ({handleClick}) => {
  return (
    <>
      {
        candidateStore.candidateList.map((candidate: ICandidate) => {
          return (
            <tr key={candidate.uuid}>
            <td>{candidate.uuid}</td>
            <td>{candidate.position_name}</td>
            <td>{candidate.name}</td>
            <td>
              <ButtonGroup>
                <Button variant="primary" onClick={e => handleClick(e, candidate, actions.EDIT)}>Edit</Button>
                <Button variant="danger" onClick={e => handleClick(e, candidate, actions.DELETE)}>Delete</Button>
              </ButtonGroup>
            </td>
          </tr>
          )
        })
      }
    </>
  )
}

export default CandidateListItem