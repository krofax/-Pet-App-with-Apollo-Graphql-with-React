import React, {useState} from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'
import PetsList from '../components/PetsList'
import NewPetModal from '../components/NewPetModal'
import Loader from '../components/Loader'

const GET_PETS = gql`
  query getPets {
    pets {
      id
      name
      type
      img
    }
  }
`;

export default function Pets () {
  const [modal, setModal] = useState(false)
  const { loading, error, data } = useQuery(GET_PETS);

  const onSubmit = input => {
    setModal(false)
  }


   if (loading) {
     return <Loader />;
  }
  
  if (error) {
    return <p>Error 404</p>;
  }
  
  if (modal) {
    return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
  }

  return (
    <div className="page pets-page">
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-10">
            <h1>Pets</h1>
          </div>

          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        <PetsList pets={data.pets}/>
      </section>
    </div>
  )
}