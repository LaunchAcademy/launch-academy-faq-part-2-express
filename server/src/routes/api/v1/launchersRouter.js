import express from "express"

import Launcher from "../../../models/Launcher.js"

const launchersRouter = new express.Router()

launchersRouter.get("/", (req, res) => {
  res.status(200).json({ launchers: Launcher.findAll() })
})

launchersRouter.get("/:id", (req, res) => {

  console.log(req.params)
  const launcher = Launcher.findById(req.params.id)
  if(launcher) {
    res.status(200).json({ launcher })
  } else {
    res.status(404).json({ error: "Launcher Not Found!" })
  }
})

export default launchersRouter