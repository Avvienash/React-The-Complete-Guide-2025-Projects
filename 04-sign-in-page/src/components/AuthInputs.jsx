import { useState } from 'react';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  const emailLabelStyle = emailNotValid ? "block mb-2 text-xs font-bold tracking-wide uppercase text-red-400" : "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300";
  const emailInputStyle = emailNotValid ? "w-full px-3 py-2 leading-tight text-red-500 border-red-300 border rounded shadow bg-red-200" : "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300";

  const passwordLabelStyle = passwordNotValid ? "block mb-2 text-xs font-bold tracking-wide uppercase text-red-400" : "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300";
  const passwordInputStyle = passwordNotValid ? "w-full px-3 py-2 leading-tight text-red-500 border-red-300 border rounded shadow bg-red-200" : "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300";
  
  return (
    <div id="auth-inputs" className="w-full max-w-sm mx-auto p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800 ">
      <div className="flex flex-col gap-2 mb-6">
        <p>
          <label className={emailLabelStyle}>Email</label>
          <input
            type="email"
            className={emailInputStyle}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label className={passwordLabelStyle}>Password</label>
          <input
            type="password"
            className={passwordInputStyle}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <button className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500" onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
