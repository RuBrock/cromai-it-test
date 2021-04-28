import { useState } from 'react';
import './app.css';
import Navbar from './core/components/Navbar';
import Form from './pages/Form';
import Triangle from './pages/Triangle';

export type ResultCalc = {
  success: boolean;
  message: string;
  aSideStr: string;
  bSideStr: string;
  cSideStr: string;
}

const App = () => {
  const [aSideValue, setASideValue] = useState('');
  const [bSideValue, setBSideValue] = useState('');
  const [cSideValue, setCSideValue] = useState('');
  const [resultCalc, setResultCalc] = useState<ResultCalc>({
    success: false,
    message: '',
    aSideStr: '',
    bSideStr: '',
    cSideStr: ''
  });

  const onChangeTriangleSide = (side: string, sideValue: string) => {
    if(side === 'a') {
      setASideValue(sideValue);
    } else if (side === 'b') {
      setBSideValue(sideValue);
    } else if (side === 'c') {
      setCSideValue(sideValue);
    }
  }

  const onCalcTriangleSides = (result: ResultCalc) => {
    setResultCalc(result);
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <section className="main-content">

          <Triangle 
            aSide={aSideValue} 
            bSide={bSideValue} 
            cSide={cSideValue} 
          />

          <Form 
            onChangeTriangleSide={onChangeTriangleSide} 
            onCalcTriangleSides={onCalcTriangleSides} 
          />

        </section>

        { resultCalc.success ?
          (
            <section className="result-content">
            
            <h2>RESULTADO: a&#178; = b&#178; + c&#178;</h2>
            
            <p><span>hipotenusa:</span> {resultCalc.aSideStr} </p>
            <p><span>cateto 1:</span> {resultCalc.bSideStr} </p>
            <p><span>cateto 2:</span> {resultCalc.cSideStr} </p>

            <p>{ resultCalc.message }</p>

            </section>
          ) 
          : ''
        }
        { !resultCalc.success && resultCalc.message ?
          (
            <section className="result-content">
            
            <h2>RESULTADO</h2>

            <p>{ resultCalc.message }</p>

            </section>
          ) 
          : ''
        }
      </main>
    </>
  );
}

export default App;
