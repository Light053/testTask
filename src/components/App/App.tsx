import { AppRouter } from '../../router';
import { Navbar } from '../Navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="App">
        <div className="content-page">
          <AppRouter />
        </div>
      </main>
    </>
  );
}

export default App;
