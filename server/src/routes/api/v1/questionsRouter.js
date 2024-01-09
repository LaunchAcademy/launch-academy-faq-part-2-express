import express from "express"

import Question from "../../../models/Question.js"

const questionsRouter = new express.Router()

questionsRouter.get("/", (req, res) => {
  res.status(200).json({ questions: Question.findAll() })
})

questionsRouter.post("/", (req, res) => {
  
  console.log(req.body)
  
  const question = new Question(req.body)
  console.log(question)

  if (question.save()) {
    res.status(201).json({ question })
  } else {
    res.status(422).json({ errors: question.errors })
  }
})

export default questionsRouter