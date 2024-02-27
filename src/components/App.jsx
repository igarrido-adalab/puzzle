import '../scss/App.scss'
import Header from './Header'
import Home from './Home'
import Tablero from './Tablero'
import Contact from './Contact'
import Error404 from './Error404'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="puzzle" element={<Tablero/>} />
          <Route path="contact-us" Component={Contact} />
          <Route path="*" Component={Error404} />
        </Routes>
      </main>
    </div>
  )
}

export default App
