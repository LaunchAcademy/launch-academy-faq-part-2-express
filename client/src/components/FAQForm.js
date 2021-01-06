import React, { useState } from "react"

const FAQForm = (props) => {
  const [questionRecord, setQuestionRecord] = useState({ question: "", answer: "" })

  const handleChange = (event) => {
    setQuestionRecord({
      ...questionRecord,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // debugger
    props.addQuestion(questionRecord)
    setQuestionRecord({ question: "", answer: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="question">Question:</label>
      <input
        onChange={handleChange}
        id="question"
        name="question"
        value={questionRecord.question}
      ></input>

      <label htmlFor="answer">Answer:</label>
      <input
        onChange={handleChange}
        value={questionRecord.answer}
        id="answer"
        name="answer"
        type="textarea"
      ></input>

      <input type="submit" value="Submit"></input>
    </form>
  )
}

export default FAQForm
