import headerImage from '../assets/investment-calculator-logo.png'


export default function Header() {
  console.log('Header Component Ran')
  return (
    <header id='header'>
      <img src={headerImage} alt='Investment Calculator Logo'></img>
      <h1>Investment Calculator</h1>
    </header>
  )
}
