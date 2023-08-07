import { Routes, Route, useLocation } from 'react-router-dom'

import MainPage from './pages/Main'
import ProjectPage from './pages/Main/Projetos'
import ExperiencePage from './pages/Main/Experiencia'
import AboutPage from './pages/Main/Sobre'
import { AnimatePresence } from 'framer-motion'



export function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait' >
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<MainPage />} />
        <Route path='project' element={<ProjectPage />} />
        <Route path='Experience' element={<ExperiencePage />} />
        <Route path='About' element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  )
}
