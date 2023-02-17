import axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { URL } from './baseURL';
import Components from './components/index';

function App() {
  useEffect(() =>{
    console.log(localStorage.getItem('TY_TOKEN'));
    if(localStorage.getItem('TY_TOKEN')===null){
      const body = new URLSearchParams();
      body.append('code', '92362882adcee427c7365530f883a68a');
      axios({
        method:'post',
url:`${URL}get-token`,
data:body,
headers:{'Content-Type':'application/x-www-form-urlencoded'}
      }).then((response) =>{
        if(response.data.status===true){
          localStorage.setItem('TY_TOKEN', response.data.data.token)
        }
      })
    }
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <Components />
      </div>
    </BrowserRouter>
  );
}

export default App;
