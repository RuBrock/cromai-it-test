import './styles.css';

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-content">

        <h2>Teorema de Pitágoras</h2>
        <p>Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos.</p>
        <form id="form-triangle">
          
          <div className="input-group">
            <label htmlFor="a-side-input">a:</label>
            <input type="number" name="a-side-input" id="a-side-input"/>
          </div>

          <div className="input-group">
            <label htmlFor="b-side-input">b:</label>
            <input type="number" name="b-side-input" id="b-side-input"/>
          </div>

          <div className="input-group">
            <label htmlFor="c-side-input">c:</label>
            <input type="number" name="c-side-input" id="c-side-input"/>
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