import '../scss/App.scss'
import Header from './Header'
import Home from './Home'
import Tablero from './Tablero'
import Contact from './Contact'
import Error404 from './Error404'
import { Route, Routes } from 'react-router-dom'

/*
 - .nojekyll: [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#troubleshooting-publishing-from-a-branch)
 - 404.html:  [Crear una página 404 personalizada para tu sitio de Páginas de GitHub](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)
 - basename:  [BrowserRouter basename property](https://reactrouter.com/en/main/router-components/browser-router#basename)
*/

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/puzzle" element={<Tablero/>} />
          <Route path="/contact-us" Component={Contact} />
          <Route path="*" Component={Error404} />
        </Routes>
      </main>
    </div>
  )
}

export default App
