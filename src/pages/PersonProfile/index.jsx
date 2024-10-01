import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useLocation, useParams } from 'react-router-dom'

function PersonProfile(props) {
  const location = useLocation()

  const [person, setPerson] = useState(null)

  const { id } = useParams()
  const { people, hirePerson, firePerson } = props

  const { personData } = location.state

  useEffect(() => {
    setPerson(personData)
  }, [])


  if (!person) return <p>Loading...</p>

  return (
    <article>
      <div className="profile-wrapper">
      <img className="profile-img" src={person.picture.large}/>
        <div className="profile-about">
          <h2>
            {person.name.first} {person.name.last}
          </h2>
          <p>{person.location.city}, {person.location.country}</p>
          
          <p>Email: {person.email}</p>
          <p>Phone: {person.phone}</p>
        </div>

        <HireForm person={person} hirePerson={hirePerson}/>

        {person.wage && 
          <>
            <button onClick={() => firePerson(person)} className="profile-firebtn">Fire!!!</button>
          </>
        }
        
      </div>
      
    </article>
  )
}

export default PersonProfile
