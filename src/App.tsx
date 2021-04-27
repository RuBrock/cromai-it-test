import { useState } from 'react';
import './app.css';
import Navbar from './core/components/Navbar';
import Form from './pages/Form';
import Triangle from './pages/Triangle';

const App = () => {
  const [aSideValue, setASideValue] = useState('');
  const [bSideValue, setBSideValue] = useState('');
  const [cSideValue, setCSideValue] = useState('');

  const onChangeSide = (side: string, sideValue: string) => {
    if(side === 'a') {
      setASideValue(sideValue);
    } else if (side === 'b') {
      setBSideValue(sideValue);
    } else if (side === 'c') {
      setCSideValue(sideValue);
    }
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="main-content">

          <Triangle aSide={aSideValue} bSide={bSideValue} cSide={cSideValue} />
          <Form onChangeSide={onChangeSide} />

        </div>
      </main>
    </>
  );
}

export default App;
