import './App.css';
import LoginForm from './LoginForm';
import { Button } from '@mui/material';
import { useState} from 'react';
import SignupForm from './SignupForm';

function App() {

  const [form, setForm] = useState('');

  return (
    <div className="App overflow-hidden">
      <h1
        className='text-3xl font-bold mt-[5vh]'
      >
        User Auth with Java Spring MVC and Spring Data for TIAA
      </h1>
      
      {
        !form.length ? <div className='flex w-[35vw] m-auto mt-[5vh] justify-evenly border border-black'>

        <Button 
          variant="contained"
          className="w-[10vw]"
          onClick={() => {
            setForm('Signup');
          }}
        >
          Signup
        </Button>
        <Button
            variant="contained"
            className="w-[10vw]"
            onClick={() => {
              setForm("Login");
            }}
        >
            Login
        </Button>
  
      </div> : form === 'Login' ? <LoginForm setForm={setForm}/> : form === 'Signup' ? <SignupForm setForm={setForm}/> : null
      }
    

    </div>
  );
}

export default App;
