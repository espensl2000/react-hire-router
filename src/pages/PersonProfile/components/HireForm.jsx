import { useEffect, useState } from 'react'

function HireForm(props) {
  const [wage, setWage] = useState(0)

  const {person, hirePerson} = props

  function handleSubmit(event) {
    event.preventDefault()
    hirePerson(person, wage)
  }

  useEffect(() => {
    setWage(person?.wage)
  }, [])

  return (
    <form className="wage-form" onSubmit={handleSubmit}>
      <label htmlFor="wage"><b>Wage Offer</b></label>
      <br/>
      <input
        className="wage-input"
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button className="wage-btn" type="submit">{person.wage ? 'Save' : 'Hire'}</button>
      
    </form>
  )
}

export default HireForm
