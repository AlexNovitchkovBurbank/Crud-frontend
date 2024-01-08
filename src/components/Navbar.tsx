import { Link, Routes, Route } from 'react-router-dom';
import GetById from './GetByUserId';
import PostRecord from './PostUserRecord';
import './Navbar.css';

function Nav(): JSX.Element {
  return (
    <>
      <div
        data-testid="NavbarDiv"
        className="d-flex flex-row justify-content-end bg-dark"
      >
        <Link
          data-testid="GetById"
          to="/GetById"
          className="me-3 px-2 py-2 text-decoration-none text-light"
        >
          GetById
        </Link>
        <Link
          data-testid="PostRecord"
          to="/PostRecord"
          className="me-3 px-2 py-2 text-decoration-none text-light"
        >
          PostRecord
        </Link>
      </div>
      <Routes>
        <Route path="/GetById" element={<GetById />}></Route>
        <Route path="/PostRecord" element={<PostRecord />}></Route>
      </Routes>
    </>
  );
}

export default Nav;
