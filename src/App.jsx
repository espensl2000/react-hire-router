import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const navigate = useNavigate()

  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch('https://randomuser.me/api/?results=5')
      const data = await response.json()
      setPeople(data.results)
    }
    FetchData()
  }, [])

  function FirePerson(person) {
    setHiredPeople(hiredPeople.filter((p) => p.id.value !== person.id.value))
    delete person.wage 
    setPeople([...people, person])
    navigate("/")
  }

  function HirePerson(person, wage){
    if(!wage){
      alert("Wage required")
      return
    }
    if(hiredPeople.some((p) => p.id.value === person.id.value)){
      let pers = hiredPeople.find((p) => p.id.value=== person.id.value)
      pers.wage = wage
      setHiredPeople([...hiredPeople])
    } else {
      person.wage = wage
      setHiredPeople([...hiredPeople, person])
      setPeople(people.filter((p) => p.id.value !== person.id.value))
    }
    navigate("/")
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link className="dashboard-btn" to="/">Dashboard</Link>

            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path ="/" element={<Dashboard hiredPeople={hiredPeople} people={people}/>}/>
        <Route path ="/view/:id" element={<PersonProfile people={people} hirePerson={HirePerson} firePerson={FirePerson}/>}/>

      </Routes>
      
    </>
  )
}
