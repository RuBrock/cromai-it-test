import { useState } from 'react';
import './styles.css';

type Props = {
  onChangeSide: (side: string, sideValue: string) => void;
}

const Form = ({ onChangeSide }: Props) => {
  const [aSide, setASide] = useState('');
  const [bSide, setBSide] = useState('');
  const [cSide, setCSide] = useState('');

  const handleOnChangeASide = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    (bSide === '' || cSide === '') && parseInt(inputValue) > 0 ? setASide(inputValue) : setASide('');
    onChangeSide('a', inputValue);
  }

  const handleOnChangeBSide = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    (aSide === '' || cSide === '') && parseInt(inputValue) > 0 ? setBSide(inputValue) : setBSide('');
    onChangeSide('b', inputValue);
  }

  const handleOnChangeCSide = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    (aSide === '' || bSide === '') && parseInt(inputValue) > 0 ? setCSide(inputValue) : setCSide('');
    onChangeSide('c', inputValue);
  }

  return (
    <div className="form-container">
      <div className="form-content">

        <h2>Teorema de Pitágoras</h2>
        <p>Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos.</p>
        <form id="form-triangle">
          
          <div className="input-group">
            <label htmlFor="a-side-input">a:</label>
            <input 
              value={aSide}
              onChange={handleOnChangeASide}
              type="number" 
              min="1"
              name="a-side-input" 
              id="a-side-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="b-side-input">b:</label>
            <input 
              value={bSide}
              onChange={handleOnChangeBSide}
              type="number" 
              min="1"
              name="b-side-input" 
              id="b-side-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="c-side-input">c:</label>
            <input 
              value={cSide}
              onChange={handleOnChangeCSide}
              type="number" 
              min="1"
              name="c-side-input" 
              id="c-side-input"
            />
          </div>

          <div className="input-group">
            <button form="form-triangle">Calcular</button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default Form;