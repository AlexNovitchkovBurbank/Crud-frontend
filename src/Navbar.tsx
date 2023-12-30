import { Link, Routes, Route } from 'react-router-dom';
import GetById from './GetByUserId';
import PostRecord from './PostUserRecord';

function Nav(): JSX.Element {
  return (
    <>
      <div>
        <Link data-testid="GetById" to="/GetById">
          GetById
        </Link>
        <Link data-testid="PostRecord" to="/PostRecord">
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
