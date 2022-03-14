import React from 'react'
import Recommender from './components/Recommender'
const App = () => {

  return (
    <div className="App">
      <h2>Book Recommender</h2>
      <p>Which book should you read?</p>
      <Recommender />
    </div>
  )
}

export default App;