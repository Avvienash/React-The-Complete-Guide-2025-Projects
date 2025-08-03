export default function Input({inputValues,handleInputChangeFunction}) {
  console.log('Input Commponent Ran')
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input type="number" value={inputValues.initialInvestment} required onChange={(e) => handleInputChangeFunction('initialInvestment',e)}></input>
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" value={inputValues.annualInvestment} required onChange={(e) => handleInputChangeFunction('annualInvestment',e)}></input>
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>EXPECTED RETURN</label>
          <input type="number" value={inputValues.expectedReturn} required onChange={(e) => handleInputChangeFunction('expectedReturn',e)}></input>
        </div>
        <div>
          <label>DURATION</label>
          <input type="number" value={inputValues.duration} required onChange={(e) => handleInputChangeFunction('duration',e)}></input>
        </div>
      </div>
    </div>
  )
}
