import { BrowserRouter } from 'react-router-dom'
import Components from './components/index';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Components />
      </div>
    </BrowserRouter>
  );
}

export default App;
