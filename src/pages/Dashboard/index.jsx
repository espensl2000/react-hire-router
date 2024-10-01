import { useState } from 'react'
import PeopleList from './components/PeopleList'


function Dashboard(props) {
  const { hiredPeople, people } = props

  return (
    <main className="dashboard-layout">
      <section className="dashboard-tab">
        <h2>Candidates</h2>
        {people && <>
          <PeopleList people={people} />
        
        </>}
      </section>
      <section className="dashboard-tab">
        <h2>Hires</h2>
        {hiredPeople && <>
          <PeopleList people={hiredPeople} />
        </>}
      </section>
    </main>
  )
}

export default Dashboard
