
import { useState } from 'react';
import Form from './Form.js'
import Cv from './Cv.js'


function App() {
  const [mode, setMode] = useState('dark');
  const [data, setData] = useState({ name: 'Insert name' });

  function toggleMode() {
    setMode(mode === 'dark' ? '' : 'dark');
  }

  function setDataFieldValue(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div className={'flex flex-col ' + mode}>
      <div className="p-2 dark:bg-slate-900 bg-slate-300">
        <button className="rounded p-2 dark:text-slate-900 dark:bg-slate-300 text-slate-100 bg-slate-900" onClick={toggleMode}>{mode === 'dark' ? 'Light' : 'Dark'} mode</button>
      </div>
      <Form update={setDataFieldValue} />
      <Cv data={data} />
    </div>
  );
}

export default App;