
const Calculator = () => {
  return (
    <>
      <div className="seed-cost-container">
        <h1>Calculate Expenses</h1>

        <div className="input">
          <label>Seed Price per Kg (₹):</label>
          <input
            type="number"
          /><br />

          <label>Seed Quantity (kg):</label>
          <input
            type="number"
          /><br />

          <label>Tax Rate (%):</label>
          <input
            type="number"
          /><br />
        </div>
      </div>

      <button className="btn" >
        Get total cost
      </button>
    </>
  );
};

export default Calculator;
