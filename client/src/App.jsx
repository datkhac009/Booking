
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import IndexPage from './pages/indexPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
