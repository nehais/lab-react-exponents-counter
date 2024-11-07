const Exponent = ({ count, exponentNo }) => {
  let multiStr = "";
  let result = 1;
  let display;

  for (let i = 1; i <= exponentNo; i++) {
    multiStr = multiStr ? multiStr + " * " + count : count;
    result *= count;
  }

  switch (exponentNo) {
    case 2:
      display = count + "²";
      break;
    case 3:
      display = count + "³";
      break;
    case 4:
      display = count + "⁴";
      break;
    case 5:
      display = count + "⁵";
      break;
    case 6:
      display = count + "⁶";
      break;
  }

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{display}</p>
      <p className="exponent-result">
        {}
        {multiStr} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default Exponent;
