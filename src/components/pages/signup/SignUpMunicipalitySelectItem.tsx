import { IMunicipality } from "interfaces/IMunicipality"
import municipalityStore from "store/MunicipalityStore"

const SignUpMunicipalityItem = () => {
  return (
    <>
      {
        municipalityStore.municipalityList.map((municipality: IMunicipality) => {
          return (
            <option key={municipality.uuid} value={municipality.id}>{municipality.name}</option>
          )
        })
      }
    </>
  )
}

export default SignUpMunicipalityItem