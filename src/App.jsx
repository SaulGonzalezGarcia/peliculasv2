import Movies from './movies/movies.jsx';
import './App.css'
import Nav from './nav/Nav.jsx';
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Movies />
    </>
  )
}

export default App
