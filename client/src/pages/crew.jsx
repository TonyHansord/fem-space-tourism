import { useEffect, useState } from 'react'

const Crew = () => {
  const [crew, setCrew] = useState([
    {
      name: 'John Doe',
      role: 'Pilot'
    }
  ])

  useEffect(() => {
    fetch('http://localhost:5050/api/crew')
      .then(res => res.json())
      .then(data => setCrew(data))
  }, [])

  return (
    <div>
        <h1>Crew</h1>
        <ul>
            {crew.map((member, index) => (
            <li key={index}>
                <h2>{member.name}</h2>
                <p>{member.role}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Crew
