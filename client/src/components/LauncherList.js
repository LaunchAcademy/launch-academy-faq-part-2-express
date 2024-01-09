import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const LauncherList = props => {
  const [launchers, setLaunchers] = useState([])
  
  const fetchLaunchers = async () => {
    try {
      const response = await fetch("/api/v1/launchers")
      const parsedResponse = await response.json()
      // debugger
      setLaunchers(parsedResponse.launchers)
    } catch (err) {
      console.log(`Error in fetch:`, err.message)
    }
  }
  
  useEffect(() => {
    fetchLaunchers()
  }, [])

  const launcherList = launchers.map(launcher => {
    return (
      <li key={launcher.id}>
        <Link to={`/launchers/${launcher.id}`}>
          {launcher.name}
        </Link>
      </li>
    )
  })

  return (
    <div>
      <h1>Launchers</h1>
      <ul>{launcherList}</ul>
    </div>
  )
}

export default LauncherList
