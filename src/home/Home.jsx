import {Outlet} from 'react-router-dom';
import Nav from '../nav/Nav.jsx';
export default function Home() {
    return (
        <>
      <Nav />
      <Outlet />
        </>
    )
}
