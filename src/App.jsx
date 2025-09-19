import 'bootstrap/dist/css/bootstrap.min.css'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import DetailFilm from './pages/DetailFilm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/films/:id" element={<DetailFilm />}></Route>
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
