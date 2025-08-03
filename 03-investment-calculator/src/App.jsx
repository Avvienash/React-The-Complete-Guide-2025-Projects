import Header from "./components/Header"
import Input from "./components/Input"
import { useState } from "react"
import Results from "./components/Results"


//set initial state
const initialState= {
  initialInvestment: 10000,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 12
}

function App() {

  console.log('App Ran')

  const [inputState,setInputState] = useState(initialState);

  function handleInputChange(inputName,event)
  {
      console.log('handle Input Chnage Function ran');


      // Update the Input
      setInputState( (previousInputValues) =>{

        const updatedInputValues = { ...previousInputValues };
        updatedInputValues[inputName] = Number(event.target.value);
        
        return({
          initialInvestment: updatedInputValues.initialInvestment,
          annualInvestment: updatedInputValues.annualInvestment,
          expectedReturn: updatedInputValues.expectedReturn,
          duration: updatedInputValues.duration
        })
      })

  }
  
  
  return (
    <>
      <Header/>
      <Input inputValues={inputState} handleInputChangeFunction={handleInputChange}/>
      <Results inputValues={inputState}/>
    </>
  )
}

export default App
