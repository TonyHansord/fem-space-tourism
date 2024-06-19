import { useEffect } from 'react'

const Crew = () => {
  useEffect(() => {
    fetch('http://localhost:5050/api/crew')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div>
      <h1>Crew</h1>
    </div>
  )
}

export default Crew
