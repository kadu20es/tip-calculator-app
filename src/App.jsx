import { useState } from 'react';
import './App.css';


import { Logo } from './assets/images/logo.jsx';
import { FormComponent } from './components/Form/formComponent';
import './i18n';



function App() {
  const [count, setCount] = useState(0)

  return (

    <main>
        <Logo />
        <FormComponent />


    </main>
  )
}

export default App
