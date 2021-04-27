import './app.css';
import Navbar from './core/components/Navbar';
import Form from './pages/Form';
import Triangle from './pages/Triangle';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="main-content">

          <Triangle />
          <Form />

        </div>
      </main>
    </>
  );
}

export default App;
