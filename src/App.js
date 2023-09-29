

import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import CreateUsers from './components/CreateUsers';
import UpdateUsers from './components/UpdateUsers';
import Users from './components/Users';
function App() {

  return (
    <div className='App'>
    <div className='App-header'>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Users></Users>}></Route>
            <Route path='create' element={<CreateUsers></CreateUsers>}></Route>
            <Route path='update/:id' element={<UpdateUsers></UpdateUsers>}></Route>
          </Routes>
      </BrowserRouter>
     
    </div>

    </div>
    
  );
}

export default App;

