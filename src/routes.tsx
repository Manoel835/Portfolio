import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import ProjectPage from './pages/Main/Projetos'
import ExperiencePage from './pages/Main/Experiencia'
import AboutPage from './pages/Main/Sobre'



export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='project' element={<ProjectPage />} />
      <Route path='Experience' element={<ExperiencePage />} />
      <Route path='About' element={<AboutPage />} />


    </Routes>
  )
}
