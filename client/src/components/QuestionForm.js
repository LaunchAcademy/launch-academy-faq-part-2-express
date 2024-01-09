import React, { useState } from "react"

const QuestionForm = (props) => {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: ""
  })

  console.log(newQuestion)

  const handleChange = (event) => {
    setNewQuestion({
      ...newQuestion,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("handle submit, about to send to FAQ parent")
    props.postQuestion(newQuestion)
  }

  return (
    <form className="callout primary" onSubmit={handleSubmit}>
      <label htmlFor="question">Question
        <input
          type="text"
          id="question"
          name="question"
          value={newQuestion.question}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="answer">Answer
        <input
          type="text"
          id="answer"
          name="answer"
          value={newQuestion.answer}
          onChange={handleChange}
        />
      </label>

      <input type="submit" />
    </form>
  )
}

export default QuestionForm
