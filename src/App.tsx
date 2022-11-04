import { Auth } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { useEffect, useState } from 'react';

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(setCurrentUser)
  }, []);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {!currentUser && (
          <>
            <div>
              <button className="sign-in sign-in--google" onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}>
                <img alt="google icon" src="data:image/png;base64,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" />
                Sign In with Google
              </button>
            </div>
            <div>
              <button className="sign-in" onClick={() => Auth.federatedSignIn()}>
                Sign In
              </button>
            </div>
          </>
        )}
        {currentUser && (
          <div>
            <h2>Information about the Current User</h2>
            <div className="user-preview">
                <pre>
                  {JSON.stringify(currentUser, null, 2)}
                </pre>
            </div>
          </div>
        )}
        <p>
          Developed by <a href="mailto:a.kicha@knu.ua">Andrii Kicha</a>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
