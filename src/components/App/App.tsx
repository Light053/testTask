import { AppRouter } from '../../router';
import { Navbar } from '../Navbar/Navbar';
import './App.css';

function App() {
  return (
    <main className="App">
      <Navbar />
      <div className="content-page">
        <AppRouter />
      </div>
    </main>
  );
}

export default App;
