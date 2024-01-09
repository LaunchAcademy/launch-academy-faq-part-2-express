import React, { useState, useEffect } from "react"

const LauncherShow = (props) => {
  const [launcher, setLauncher] = useState({})
  
  console.log(launcher)
  
  const fetchLauncherDetails = async () => {
    try {
      const launcherId = props.match.params.launcherId
      const response = await fetch(`/api/v1/launchers/${launcherId}`)
      const parsedResponse = await response.json()
      setLauncher(parsedResponse.launcher)
    } catch (err) {
      console.error(`Error in fetch:`, err.message)
    }
  }

  useEffect(() => {
    fetchLauncherDetails()
  }, [])

  return (
    <div>
      <h1>{launcher.name}</h1>
      <p>{launcher.bio}</p>
    </div>
  )
}

export default LauncherShow
