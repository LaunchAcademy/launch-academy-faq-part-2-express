import React, { useState } from 'react'

const FAQForm = props => {

  const [formFields, setFormFields] = useState({
    question: "",
    answer: ""
  })

  const postNewQuestion = async (event) => {
    event.preventDefault()

    const response = await fetch("/api/v1/questions", { 
      method: "POST",
      body: JSON.stringify(formFields),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const parsedPOSTResponse = await response.json()
    const newQuestionFromBackend = parsedPOSTResponse.question
    props.setQuestions(props.questions.concat(newQuestionFromBackend))
  }


  const handleInputChange = (event) => {
    setFormFields({
      ...formFields,
      [event.currentTarget.name]: event.currentTarget.value, 
    })
  }

  return (
    <div className="page">
      <form onSubmit={postNewQuestion}>
        <label> Question:
          <input
            type="text"
            name="question"
            onChange={handleInputChange}
            value={formFields.question}
          />
        </label>

        <label> Answer:
          <input
            type="text"
            name="answer"
            onChange={handleInputChange}
            value={formFields.answer}
          />
        </label>
        

        <input type="submit" value="Add FAQ"/>
      </form>
    </div>
  )
}

export default FAQForm
