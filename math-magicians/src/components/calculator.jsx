function Calculator() {
  return (
    <div>
      <div>
        <input className="calculatorInput" type="string" placeholder="0" />
      </div>

      <div className="calculatorMiddleSection">
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button className="colorOrangeOperators">/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="colorOrangeOperators">*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="colorOrangeOperators">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="colorOrangeOperators">+</button>
      </div>
      <div className="calculatorBottomSection">
        <button>0</button>
        <button>.</button>
        <button className="colorOrangeOperators">=</button>
      </div>
    </div>
  );
}

export { Calculator };
