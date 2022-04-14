import React, { useState, useEffect } from 'react'

const LauncherShow = props => {
  
  const [launcherData, setLauncherData] = useState({
    id: "",
    name: "",
    bio: "",
    reviews: []
  })
  
  const id = props.match.params.id

  const fetchSpecificLauncher = async () => {
    const response = await fetch(`/api/v1/launchers/${id}`)
    const parsedLauncherData = await response.json()
    setLauncherData(parsedLauncherData.launcher)
    setReviews(parsedLauncherData.reviews)
  }

  useEffect(() => {
    fetchSpecificLauncher()
  }, [])

  return (
    <div>
      <div>
        {launcherData.name}
      </div>
      <div>
       {launcherData.bio}
      </div>
    </div>
  )
}

export default LauncherShow
