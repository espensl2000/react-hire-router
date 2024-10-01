import { Link } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props

  return (
    <li className="people-listitem">
      <div className="people-about-wrapper">

      <img className="people-img" src={person.picture.large}/>

        <div className="people-about">
            <h3 className="people">
              {person.name.first} {person.name.last}
            </h3>
          
          <p>
            {person.location.city}, {person.location.country}
          </p>

          {person.wage && 
            <>
              <p>Wage: £{person.wage}</p>
            </>
          }
        </div>
      </div>
          
      <Link className="people-btn" to={`/view/${person.id.value}`} state={{ personData: person}}>
        {person.wage ? 'Edit' : 'View'}
      </Link>
      
      
    </li>
  )
}

export default PeopleListItem
