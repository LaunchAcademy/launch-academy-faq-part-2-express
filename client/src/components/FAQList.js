import React, { useState, useEffect } from 'react'
import Question from './Question'

import FAQForm from "./FAQForm"

const FAQList = props => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  const fetchQuestions = async () => {
    const response = await fetch("/api/v1/questions")
    const parsedQuestionsData = await response.json()
    setQuestions(parsedQuestionsData.questions)
  }

  useEffect(() => {
    fetchQuestions()
  }, []) 


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

    let handleClick = () => {
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
      <FAQForm 
        setQuestions={setQuestions}
        questions={questions}
      />
      <div className="question-list">{questionListItems}</div>
    </div>
  )
}

export default FAQList
