import React, { useState } from 'react'
import { Route, BrowserRouter } from "react-router-dom"
import { hot } from "react-hot-loader/root"
import FAQList from './FAQList'
import LauncherList from "./LauncherList"
import LauncherShow from './LauncherShow'

const App = props => {

  return (
    <BrowserRouter>
      <Route exact path="/" component={FAQList} />
      <Route exact path="/launchers" component={LauncherList} />
      <Route exact path="/launchers/:id" component={LauncherShow} />
    </BrowserRouter>
  )
}

export default hot(App)
