import React, { useState, useEffect } from 'react'

import "../assets/scss/main.scss"

import Question from './Question'
import QuestionForm from './QuestionForm'

const FAQList = props => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  const fetchQuestions = async () => {
    try {
      const response = await fetch("/api/v1/questions")
      const parsedResponse = await response.json()
      setQuestions(parsedResponse.questions)
    } catch (err) {
      console.error(`Error in fetch: `, err.message)
    }
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  const postQuestion = async (newQuestionData) => {
    console.log("posted here!")
    console.log(newQuestionData)
    try {
      const response = await fetch("/api/v1/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newQuestionData)
      })
      const parsedResponse = await response.json()
      // debugger
      setQuestions([
        ...questions,
        parsedResponse.question
      ])
    } catch (err) {
      console.error(`Error in fetch:`, err.message)
    }
  }

  const toggleQuestionSelect = id => {
    if (id === selectedQuestion) {
      setSelectedQuestion(null)
    } else {
      setSelectedQuestion(id)
    }
  }

  const questionListItems = questions.map(question => {
    let selected
    if (selectedQuestion === question.id) {
      selected = true
    }

    const handleClick = () => {
      toggleQuestionSelect(question.id)
    }

    return (
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div className="page">
      <h1>We Are Here To Help</h1>
      <QuestionForm postQuestion={postQuestion} />
      <div className="question-list">{questionListItems}</div>
    </div>
  )
}

export default FAQList
