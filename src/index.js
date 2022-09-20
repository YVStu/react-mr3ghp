import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [showText, setShow]=useState(true);
  return (
    <div style={styles.container}>
      <button onClick={()=>{setShow(!showText)}}>{showText?"Hide":"Show"} Element Below</button>
      {showText &&<p>Toggle Challenge</p>}
    </div>
  );
}

const styles = {
  container: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
  },
  paragraph: {},
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
