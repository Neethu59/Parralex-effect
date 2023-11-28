import Home from './Pages/Home/Home';
import Nav from './Pages/Nav';
import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/nav"element={<Nav/>}/>
      

    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
