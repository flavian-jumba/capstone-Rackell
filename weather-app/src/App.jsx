import React from 'react'
import TopButtons from './components/TopButtons'
import SearchBar from './components/SearchBar'
function App() {
  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700 '>
      <TopButtons />
      <SearchBar />
    </div>
  )
}

export default App