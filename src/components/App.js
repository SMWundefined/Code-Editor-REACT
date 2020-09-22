import React, { useState } from 'react';
import Editor from './Editor'

function App() {
  const [html, setHTML] = useState('')
  const [css, setCSS] = useState('')
  const [js, setJS] = useState('')

  const srcDoc = `
  <html>
    <body>
      ${html}
    </body>
    <style>
      ${css}
    </style>
    <script>
      ${js}
    </script>
  </html>
  `

  return (
  < >
  <div className="pane top-panel">
    <Editor 
    language="xml" 
    displayName="HTML" 
    value={html} 
    onChange={setHTML} 
    //hook set  to change the state everytime we pass a text
    />
    <Editor 
    language="css" 
    displayName="CSS" 
    value={css} 
    onChange={setCSS} 
    />
    <Editor 
    language="javascript" 
    displayName="JavaScript" 
    value={js} 
    onChange={setJS} 
    />
  </div>
  <div className = "pane">
    <iframe
      srcDoc ={{srcDoc}}
      title ="output"
      sandbox = "allow-scripts"
      frameBorder="0"
      width ="100%"
      height="100%"

      />
  </div>
  </>
  )
}

export default App;
