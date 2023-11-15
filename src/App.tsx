import { useState } from 'react'
import './App.css'
import './portfolio/Portfolio.css'
import './toolbar/Toolbar.css'
import { Toolbar } from './toolbar/Toolbar'
import { Portfolio } from './portfolio/Portfolio'
import { ProjectList } from './projectList/ProjectList'

function App() {
  
  const state = Portfolio()
  const [currentFilter, setFilter] = useState(state.selected)
  const [currentProject, setProject] = useState(state.projects)
  const onSelectFilter = (filter) => {
    if (filter === 'All') {
      setProject(state.projects)
    } else {
      setProject(state.projects.filter(item => filter === item.category))
    }
    setFilter(filter)
  }
  state.selected = currentFilter
  return (
    <>
      < Toolbar stats = {state} selectFilter = { onSelectFilter } />
      < ProjectList items = {currentProject}/>
    </>
  )
}

export default App
