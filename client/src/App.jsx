import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import { useLocation } from 'react-router-dom'

// import { useState } from 'react'
function App () {
  const url = useLocation()
  const { pathname } = url

  console.log(pathname)

  let pageClass = ''

  switch (pathname) {
    case '/technology':
      pageClass =
        'w-screen h-screen bg-[url(/assets/technology/background-technology-desktop.jpg)] bg-cover bg-center'
      break
    case '/crew':
      pageClass =
        'w-screen h-screen bg-[url(/assets/crew/background-crew-desktop.jpg)] bg-cover bg-center'
      break
    case '/destination':
      pageClass =
        'w-screen h-screen bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-cover bg-center'
      break
    default:
      pageClass =
        'w-screen h-screen bg-[url(/assets/home/background-home-desktop.jpg)] bg-cover bg-center'
  }

  return (
    <div className={pageClass}>
      <Navbar />

      <div className='flex justify-center items-center h-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
