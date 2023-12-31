import Nav from './components/Navbar.tsx';

function App() {
  return (
    <div data-testid="AppDiv" role="main">
      <Nav />
      <h1 role='heading' aria-level={1}>Welcome!</h1>
    </div>
  );
}

export default App;
