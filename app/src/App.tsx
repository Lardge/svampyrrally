import React from 'react'

import './App.css'
import { QuestionsView } from './components/QuestionsView'

function App() {
  const props = {
    questions: [
      { id: 1, clue: 'hej', solution: '23' },
      { id: 1, clue: 'hej', solution: '23' },
      { id: 1, clue: 'hej', solution: '23' },
    ],
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <QuestionsView {...props}></QuestionsView>
      </header>
    </div>
  )
}

export default App
