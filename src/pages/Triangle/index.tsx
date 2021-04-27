import './styles.css';

const Triangle = () => {
  return(
    <div className="triangle-container">
      <div className="triangle-content">

        <div className="triangle">
          <span className="triangle-side" id="a-side">a</span>
          <span className="triangle-side" id="b-side">b</span>
          <span className="triangle-side" id="c-side">c</span>
        </div>

      </div>
    </div>
  );
}

export default Triangle;