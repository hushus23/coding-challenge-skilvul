import React from 'react'
import CardList from './components/CardList'
import SearchBar from './components/SearchBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="container">
          <SearchBar />
          <CardList />
    </div>

  )
}

export default App