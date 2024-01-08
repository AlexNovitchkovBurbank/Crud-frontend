import { Route, Routes } from 'react-router-dom';
import Nav from './Navbar.tsx';
import WelcomePage from './WelcomePage.tsx';

function App() {
  return (
    <>
      <div role="navigation">
        <Nav />
      </div>
      <div role="main">
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
