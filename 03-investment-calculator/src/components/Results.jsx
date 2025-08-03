import {calculateInvestmentResults} from '../util/investment'

export default function Results({inputValues}) {
  const results = calculateInvestmentResults(inputValues)
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(row => 
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{row.investmentValue}</td>
            <td>{row.interestEarnedInYear}</td>
            <td>{row.totalInterest}</td>
            <td>{row.investedCapital}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}